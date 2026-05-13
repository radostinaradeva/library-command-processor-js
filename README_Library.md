# Library Command Processor (JavaScript)

## Overview
This project is a JavaScript-based implementation of a command-driven library management system. It simulates real-world data manipulation by processing a sequence of commands that modify an array of books.

## Problem Description
The system manages a collection of books and executes commands such as lending, returning, exchanging, and stopping the process. The input consists of an array where the first element defines the number of books, followed by book titles and a sequence of commands.

## Commands

- **Lend**  
  Removes the first book from the list and prints:  
  `"Book Title book lent!"`

- **Return {book title}**  
  Adds the book to the beginning of the list

- **Exchange {start index} {end index}**  
  Swaps books at the given indices and prints:  
  `"Exchanged!"`

- **Stop**  
  Ends the process and prints remaining books or a message if empty

## Key Features
- Command parsing from raw input array
- Array manipulation (shift, unshift, swap)
- Input validation for indices
- Handling of invalid or unrecognized commands
- Edge case handling (empty library)

## Example Output

```text
Harry Potter book lent!
Books left: The Lord of the Rings, The Hunger Games
```

## Purpose

This exercise demonstrates fundamental algorithmic thinking, command parsing, and array manipulation skills, relevant for QA and backend logic validation scenarios.

It simulates real-world data processing logic similar to backend systems that handle structured commands and state changes.

## Technologies Used
- JavaScript (ES6)

## Example Usage
```javascript
library(['3', 'Harry Potter', 'The Lord of the Rings', 'The Hunger Games', 'Lend', 'Stop']);
```