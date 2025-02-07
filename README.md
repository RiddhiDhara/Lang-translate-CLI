# 🌍 Language Translate CLI

A simple and powerful command-line tool for translating text between languages using Google Translate. Built with Node.js and google-translate-api-x.

## Features

✅ Translate text to over 100 languages.

✅ List all supported languages with their ISO-639-1 codes.

✅ Simple and intuitive command-line interface.

✅ Colorful output for better readability.

✅ Lightweight and fast.

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (Node Package Manager)

### Steps

#### Clone the repository:

```bash
git clone https://github.com/your-username/language-translate-cli.git
cd language-translate-cli
```

#### Install dependencies:

```bash
npm install
```

#### Install the CLI globally:

```bash
npm install -g .
```

## Usage

### Translate Text

Translate text to a target language:

```bash
tran <language> <text>
```

#### Examples:

```bash
tran french "Hello, how are you?"
tran es "Good morning"
tran zh "This is a test"
```

### List Supported Languages

View all supported languages and their codes:

```bash
tran --list
```

### Help

Display help and usage instructions:

```bash
tran --help
```

## Supported Languages

The CLI supports over 100 languages. Here are a few examples:

| Language Name       | Code |
|--------------------|------|
| English           | en   |
| Spanish          | es   |
| French           | fr   |
| Chinese (Simplified) | zh   |
| German           | de   |
| Japanese         | ja   |
| Russian         | ru   |
| Hindi           | hi   |

For a full list, run:

```bash
tran --list
```

## Contributing

Contributions are welcome! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -m "Add your feature"
```

4. Push to the branch:

```bash
git push origin feature/your-feature-name
```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- google-translate-api-x for the translation API.
- chalk for colorful terminal output.
- yargs for command-line argument parsing.

## Support

If you encounter any issues or have questions, feel free to open an issue on GitHub.

Enjoy translating! 🌍✨

