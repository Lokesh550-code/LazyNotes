# LazyNotes

A simple, lightweight command-line notes manager built with Node.js.

LazyNotes lets you quickly create, view, update, and delete notes directly from your terminal. It is designed to be minimal, fast, and easy to use.

---

## Features

* Add notes from the terminal
* List all saved notes in a clean formatted view
* Update existing notes
* Delete notes by ID
* Colorful CLI output for readability
* Works with or without quotes for multi-word notes

---

## Installation

Install LazyNotes globally using npm:

```bash
npm install -g lazynotes
```

---

## Usage

### Show help

```bash
lazynotes help
```

### Add a note

```bash
lazynotes add "Buy milk"
```

You can also add notes without quotes:

```bash
lazynotes add buy milk
```

### List notes

```bash
lazynotes list
```

Example output:

```
LazyNotes

1. Buy milk
2. Study circuits
3. Finish project
```

### Update a note

```bash
lazynotes update 1 "Buy milk and bread"
```

### Delete a note

```bash
lazynotes delete 2
```

---

## Commands

| Command  | Description             |
| -------- | ----------------------- |
| `add`    | Add a new note          |
| `list`   | Show all notes          |
| `update` | Update an existing note |
| `delete` | Delete a note by ID     |
| `help`   | Show help information   |

---

## Example Workflow

```bash
lazynotes add buy milk
lazynotes add finish assignment
lazynotes list
lazynotes update 1 buy milk and bread
lazynotes delete 2
```

---

## How It Works

LazyNotes stores notes in a local JSON file.
Each note is assigned a unique ID and managed through CLI commands.

---

## Requirements

* Node.js installed on your system
* npm

---

## Contributing

Contributions are welcome. Feel free to open issues or submit pull requests.

---

## License

MIT License
