#! /usr/bin/env node
const yargs = require("yargs");
const utils = require("./utils.js");

console.log("\n💻 Lang-Translate CLI 🌍");
console.log("----------------------------------")

const usage = "\n🚀 Usage: tran <lang_name> sentence to be translated";
const options = yargs
  .usage(usage)
  .option("l", {
    alias: "languages",
    describe: "List all supported languages.",
    type: "boolean",
    demandOption: false,
  })
  .version() // Add version option
  .help(true).argv;

if (yargs.argv.l || yargs.argv.languages) {
  utils.showAll();
  process.exit(0);
}

if (yargs.argv._.length < 2) {
  utils.showHelp();
  process.exit(1);
}

const language = yargs.argv._[0].toLowerCase();
const parsedLanguage = utils.parseLanguage(language);
if (!parsedLanguage) {
  console.error("⚠️ Invalid or unsupported language!");
  process.exit(1);
}

const sentence = utils.parseSentence(yargs.argv._);
if (!sentence) {
  console.error("\n🔔 The entered sentence is like John Cena, I can't see it!\n");
  console.log("📌 Enter tran --help to get started.\n");
  process.exit(1);
}

// Use the correct import and usage of the translation library
import("google-translate-api-x")
  .then((module) => {
    const translate = module.default; // Access the default export
    translate(sentence, { to: parsedLanguage })
      .then((res) => {
        console.log("\n" + "Input-sentence : " + sentence);
        console.log("\n" + "Translated-text : " + res.text + "\n");
      })
      .catch((err) => {
        console.error("❌ Translation Error: ", err);
      });
  })
  .catch((err) => {
    console.error("🔴 Import Error: ", err);
  });