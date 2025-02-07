const chalk = require("chalk");

const usage = "\nUsage: tran <lang_name> sentence to be translated";

function parseSentence(words) {
  return words.slice(1).join(" ").trim(); // Join all words after the language argument
}

function showHelp() {
  console.log(usage);
  console.log("\nOptions:\r");
  console.log("📌\t--version\t      Show version number.\t\t[boolean]\r");
  console.log("📌\t-l, --languages\t      List all languages.\t\t[boolean]\r");
  console.log("📌\t--help\t\t      Show help.\t\t\t[boolean]\n");
  console.log("\n🎯 Examples:\r");
  console.log("\t💡 tran french Hello, how are you?\r");
  console.log("\t-> tran es Hola, ¿cómo estás?\n");
}

function showAll() {
  console.log(chalk.magenta.bold("\nLanguage Name\t\tISO-639-1 Code\n"));
  for (let [key, value] of languages) {
    console.log(`${key}\t\t${value}\n`);
  }
}

let languages = new Map([
  ["afrikaans", "af"],
  ["albanian", "sq"],
  ["amharic", "am"],
  ["arabic", "ar"],
  ["armenian", "hy"],
  ["azerbaijani", "az"],
  ["basque", "eu"],
  ["belarusian", "be"],
  ["bengali", "bn"],
  ["bosnian", "bs"],
  ["bulgarian", "bg"],
  ["catalan", "ca"],
  ["cebuano", "ceb"],
  ["chinese", "zh"],
  ["corsican", "co"],
  ["croatian", "hr"],
  ["czech", "cs"],
  ["danish", "da"],
  ["dutch", "nl"],
  ["english", "en"],
  ["esperanto", "eo"],
  ["estonian", "et"],
  ["finnish", "fi"],
  ["french", "fr"],
  ["frisian", "fy"],
  ["galician", "gl"],
  ["georgian", "ka"],
  ["german", "de"],
  ["greek", "el"],
  ["gujarati", "gu"],
  ["haitian creole", "ht"],
  ["hausa", "ha"],
  ["hawaiian", "haw"],
  ["hebrew", "he"],
  ["hindi", "hi"],
  ["hmong", "hmn"],
  ["hungarian", "hu"],
  ["icelandic", "is"],
  ["igbo", "ig"],
  ["indonesian", "id"],
  ["irish", "ga"],
  ["italian", "it"],
  ["japanese", "ja"],
  ["javanese", "jv"],
  ["kannada", "kn"],
  ["kazakh", "kk"],
  ["khmer", "km"],
  ["kinyarwanda", "rw"],
  ["korean", "ko"],
  ["kurdish", "ku"],
  ["kyrgyz", "ky"],
  ["lao", "lo"],
  ["latin", "la"],
  ["latvian", "lv"],
  ["lithuanian", "lt"],
  ["luxembourgish", "lb"],
  ["macedonian", "mk"],
  ["malagasy", "mg"],
  ["malay", "ms"],
  ["malayalam", "ml"],
  ["maltese", "mt"],
  ["maori", "mi"],
  ["marathi", "mr"],
  ["mongolian", "mn"],
  ["burmese", "my"],
  ["nepali", "ne"],
  ["norwegian", "no"],
  ["nyanja", "ny"],
  ["odia", "or"],
  ["pashto", "ps"],
  ["persian", "fa"],
  ["polish", "pl"],
  ["portuguese", "pt"],
  ["punjabi", "pa"],
  ["romanian", "ro"],
  ["russian", "ru"],
  ["samoan", "sm"],
  ["scots", "gd"],
  ["serbian", "sr"],
  ["sesotho", "st"],
  ["shona", "sn"],
  ["sindhi", "sd"],
  ["sinhalese", "si"],
  ["slovak", "sk"],
  ["slovenian", "sl"],
  ["somali", "so"],
  ["spanish", "es"],
  ["sundanese", "su"],
  ["swahili", "sw"],
  ["swedish", "sv"],
  ["tagalog", "tl"],
  ["tajik", "tg"],
  ["tamil", "ta"],
  ["tatar", "tt"],
  ["telugu", "te"],
  ["thai", "th"],
  ["turkish", "tr"],
  ["turkmen", "tk"],
  ["ukrainian", "uk"],
  ["urdu", "ur"],
  ["uyghur", "ug"],
  ["uzbek", "uz"],
  ["vietnamese", "vi"],
  ["welsh", "cy"],
  ["xhosa", "xh"],
  ["yiddish", "yi"],
  ["yoruba", "yo"],
  ["zulu", "zu"],
]);

function parseLanguage(language) {
  if (language.length === 2) return language;
  return languages.get(language) || null;
}

module.exports = {
  parseLanguage,
  showAll,
  showHelp,
  parseSentence,
};