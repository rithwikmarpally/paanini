export const docsData = [
  {
    id: 'intro',
    title: 'Introduction',
    content: `# 🕉️ Paanini - Sanskrit Programming Language

**Paanini** is a Sanskrit programming language that combines the beauty of Devanagari script with Python-like syntax. Write code using Sanskrit keywords and execute it seamlessly!

## ✨ Features

- 🎯 **Sanskrit Keywords**: Use देवनागरी script for programming constructs
- 🔄 **Python-like Syntax**: Familiar indentation-based structure
- 🚀 **Multiple Interfaces**: CLI, REPL, Web IDE, and file execution
- 🔧 **Transpilation**: Convert Sanskrit code to Rust binaries
- 🌐 **Web IDE**: Browser-based development environment with virtual keyboard
- 📝 **Real-time Transliteration**: Type English, get Sanskrit automatically

## 🚀 Quick Start

### Installation

> **Note**: Install with \`cargo install paanini-lang\`, then use the \`paanini\` command.

#### From Crates.io (Recommended)
\`\`\`bash
# Install the package
cargo install paanini-lang
# Then use the 'paanini' command
paanini --version
\`\`\`

#### From Source
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/paanini-lang.git
cd paanini-lang
cargo install --path .
\`\`\`

### Your First Paanini Program

Create \`hello.paanini\`:
\`\`\`sanskrit
!! नमस्ते विश्व - Hello World
दर्श("नमस्ते विश्व")

!! चर और गणना - Variables and Math
x = 5
y = 10
योग = x + y
दर्श("योग:", योग)

!! शर्त - Conditionals
यदि x < y:
    दर्श("x छोटा है")
अन्यथा:
    दर्श("x बड़ा है")
\`\`\`

Run it:
\`\`\`bash
paanini run hello.paanini
\`\`\`
`
  },
  {
    id: 'guide',
    title: 'Language Guide',
    content: `# Paanini Language Guide

This document explains the syntax, keywords, and tooling for the **Paanini** Sanskrit-inspired programming language.

---

## 1. Getting Started

### 1.1 Installation

Install the CLI from either distribution channel:

- **Rust**: \`cargo install paanini-lang\`
- **Node.js** (wraps the same binary): \`npm install -g paanini-lang\`

Both installers expose a \`paanini\` executable. The binary bundles the web IDE assets, so no additional static files are required.

### 1.2 Running Code

| Command | Description |
|---------|-------------|
| \`paanini\` | Start the interactive REPL. Type \`help\` inside the REPL for a quick syntax reminder. |
| \`paanini run file.paanini\` | Execute the specified source file. |
| \`paanini build file.paanini\` | Transpile to Rust and build an executable (see README for release flags). |
| \`paanini serve [--port 8080]\` | Launch the Web IDE; open the printed \`http://localhost:<port>\` URL. |

All source files use the \`.paanini\` extension and must be UTF-8 encoded to preserve Devanagari glyphs.

### 1.3 Project Layout

A minimal project often contains:

\`\`\`
hello.paanini  # entry point
README.md      # optional instructions
\`\`\`

The language does not currently provide a module system, so each run processes a single file.

---

## 2. Syntax Basics

### 2.1 Comments

Two comment styles are supported:

\`\`\`sanskrit
!! यह टिप्पणी है  (Python-style!)
# This is also a comment (for convenience)
\`\`\`

### 2.2 Whitespace & Blocks

Blocks are indentation-sensitive, similar to Python. Start a block with a trailing colon and indent the statements within it.

\`\`\`sanskrit
यदि (x < 10):
    दर्श("x छोटा है")
अन्यथा:
    दर्श("x बड़ा है")
\`\`\`

Internally the interpreter converts indentation to braces, so consistent spaces are recommended (tabs are normalized to spaces automatically).

### 2.3 Identifiers

Identifiers may contain Devanagari or Latin letters, digits, and underscores. Examples: \`गणना\`, \`data_value\`, \`संख्या2\`.

### 2.4 Literals

| Literal | Example | Notes |
|---------|---------|-------|
| Number | \`42\`, \`3.14\` | Stored as 64-bit floating point. |
| String | \`"नमस्ते"\` | Must use double quotes. |
| Boolean | \`सत्य\`, \`असत्य\` | Sanskrit words for \`true\` and \`false\`. |
| Null | implicitly \`null\` result | Returned when an expression fails or a function has no explicit result. |

### 2.5 Variables & Assignment

Use \`=\` to assign expression results to identifiers (no declaration keyword is needed).

\`\`\`sanskrit
नाम = "भारत"
संख्या = 108
\`\`\`

Assignment is separate from comparison (\`==\`). Other comparison operators include \`!=\`, \`>\`, \`<\`, \`>=\`, and \`<=\`.

### 2.6 Expressions

- Arithmetic: Only addition (\`+\`) is implemented.
- String concatenation: \`+\` works with strings and numbers; non-string values are coerced to their textual form.
- Parentheses group subexpressions: \`(x + 5)\`.

### 2.7 Printing

Use the Sanskrit verb **दर्श** ("show"):

\`\`\`sanskrit
दर्श("नमस्ते विश्व")
\`\`\`

\`दर्श(expr)\` evaluates the expression and writes its textual representation to standard output.

---

## 3. Control Flow

### 3.1 Conditional (\`यदि\` / \`अन्यथा\`)

\`\`\`sanskrit
यदि (संख्या > 0):
    दर्श("धनात्मक")
अन्यथा:
    दर्श("ऋणात्मक")
\`\`\`

Conditions must compare numeric expressions. Unsupported comparisons emit runtime errors.

### 3.2 While Loop (\`यावत्\`)

\`\`\`sanskrit
गणक = 0
यावत् (गणक < 5):
    दर्श(गणक)
    गणक = गणक + 1
\`\`\`

The interpreter includes a safety guard (10,000 iterations) to prevent accidental infinite loops.

### 3.3 For Loop (\`परिभ्रमण\`)

\`\`\`sanskrit
परिभ्रमण i in परिधि(5):
    दर्श("Iteration: " + i)
\`\`\`

The loop header must follow \`परिभ्रमण <variable> in परिधि(<limit>)\`. The helper **परिधि** returns a list or range from \`0\` up to (but excluding) the provided upper bound.

---

## 4. Functions

### 4.1 Defining Functions (\`कार्य\`)

\`\`\`sanskrit
कार्य greet(नाम):
    दर्श("नमस्ते " + नाम)
\`\`\`

- Parameters are comma-separated, and their names must be valid identifiers.
- A function currently returns \`null\` implicitly; use \`दर्श\` for observable output.

### 4.2 Calling Functions

Call functions with Sanskrit identifiers just like Python:

\`\`\`sanskrit
greet("विश्व")
\`\`\`

### 4.3 Built-in Functions

| Built-in | Description |
|----------|-------------|
| \`दर्श(expr)\` | Print the value of \`expr\`. |
| \`परिधि(n)\` | Return a list-like object containing integers \`0..n-1\`. Used internally by \`परिभ्रमण\`. |
| \`help\` | When entered in the REPL, prints a quick language summary. |

---

## 5. REPL Convenience Commands

Inside the REPL:

- \`help\` – display a concise syntax cheat sheet.
- Arrow keys / prompt editing – provided by the host terminal.
- Multi-line input – paste or type blocks; the REPL executes once a full construct is entered.
`
  },
  {
    id: 'npm',
    title: 'NPM Package',
    content: `# Paanini (पाणिनि) — Sanskrit Programming Language for Node.js

Paanini is a modern Sanskrit programming language with Python-like syntax, packaged for Node.js developers. This npm wrapper downloads (or builds) the Rust-powered \`paanini\` CLI so you can run Paanini code on Windows, macOS, and Linux without installing Rust manually.

> **Rust crate**: [\`paanini-lang\`](https://crates.io/crates/paanini-lang) · **Version**: 0.1.0 · **License**: MIT

## Installation

\`\`\`bash
# Global install
npm install -g paanini-lang

# Use instantly without global install
npx paanini-lang --version
\`\`\`

During installation the wrapper tries to download a prebuilt binary from GitHub Releases. If the download fails, it automatically builds from source (requires Rust via \`rustup\`).

## Usage

### CLI Commands

Paanini provides a familiar CLI workflow. After installing, run:

\`\`\`bash
paanini                      # Start interactive REPL
paanini repl                 # Explicit REPL command
paanini run path/to/file.paanini
paanini run file.paanini --verbose
paanini build file.paanini
paanini build file.paanini -o myapp --release
paanini serve                # Launch web IDE (default port 8080)
paanini serve --port 3000
paanini example              # Show example Sanskrit source
paanini --help               # Display CLI help
paanini --version            # Show version
\`\`\`

### Programmatic API

\`\`\`javascript
const {
  getBinaryPath,
  runPaanini,
  runFile,
  transpile,
  startRepl,
  startServer,
} = require('paanini-lang');

(async () => {
  // Execute arbitrary Paanini CLI arguments
  const { code, stdout } = await runPaanini(['--version']);
  console.log(code, stdout.trim());

  // Run a Paanini file
  await runFile('examples/hello.paanini');

  // Transpile to Rust
  await transpile('examples/app.paanini', 'dist/app');

  // Start the REPL (inherits stdio)
  const repl = startRepl();

  // Start the web IDE on a custom port
  const serverProcess = startServer(3000);
})();
\`\`\`
`
  },
  {
    id: 'dev',
    title: 'Development Guide',
    content: `# Paanini npm Wrapper — Development Guide

This document describes how to work on the \`paanini-lang\` npm package that wraps the Rust-based Paanini CLI.

## Prerequisites

- Rust toolchain installed via [rustup](https://rustup.rs/)
- Node.js v14 or newer
- GitHub account with access to the \`paanini-lang\` repository

## 1. Build the Rust Binary

1. From the repository root (one level above this \`npm/\` folder), build the release binary:
   \`\`\`bash
   cargo build --release
   \`\`\`
2. The resulting executable is at \`target/release/Paanini\` (or \`Paanini.exe\` on Windows).

## 2. Install npm Dependencies

1. Enter the npm wrapper directory:
   \`\`\`bash
   cd npm
   \`\`\`
2. Install dependencies (none today, but this ensures lockfiles are updated if added later):
   \`\`\`bash
   npm install
   \`\`\`

## 3. Run the Postinstall Script Manually (Optional)

Re-run the installer to copy/build the binary after local changes:
\`\`\`bash
node install.js
\`\`\`
This attempts to download a release binary and falls back to \`cargo build --release\`.

## 4. Test the Package

Execute the built-in smoke tests:
\`\`\`bash
npm test
\`\`\`
\`test.js\` verifies that the binary exists and that \`Paanini --version\` and \`Paanini --help\` succeed.
`
  }
];
