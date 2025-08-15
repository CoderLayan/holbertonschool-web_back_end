# MongoDB Operations Project

This project demonstrates fundamental MongoDB operations through both shell commands and Python scripts using PyMongo.

## Table of Contents
- [Project Overview](#project-overview)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Documentation](#documentation)
- [Testing](#testing)
- [Contributing](#contributing)

## Project Overview

This project covers 12 essential MongoDB operations:
1. List all databases
2. Create a database
3. Insert document
4. List all documents
5. Find documents matching criteria
6. Count documents
7. Update documents
8. Delete documents by match
9. Python: List all documents
10. Python: Insert document
11. Python: Update school topics
12. Python: Log statistics

## Learning Objectives

After completing this project, you should understand:

### General Concepts
- NoSQL fundamentals and differences from SQL
- ACID properties in databases
- Document storage concepts
- Types of NoSQL databases
- Benefits of NoSQL databases
- Basic CRUD operations in MongoDB

### Technical Skills
- Querying information from MongoDB
- Inserting/updating/deleting documents
- Using MongoDB shell commands
- Interacting with MongoDB using PyMongo

## Requirements

### MongoDB Command Files
- Ubuntu 20.04 LTS with MongoDB 4.4
- Files must start with a comment: `// my comment`
- Mandatory README.md
- Files end with newline

### Python Scripts
- Python 3.9 with PyMongo 4.8.0
- Shebang line: `#!/usr/bin/env python3`
- PEP 8 compliant (pycodestyle v2.5.*)
- Comprehensive module/function docstrings
- Prevent execution on import: `if __name__ == "__main__":`

## Installation

1. Install MongoDB 4.4 on Ubuntu 20.04:
```bash
# Follow official MongoDB installation guide:
# https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
