---
name: markdown-export
description: Export Markdown documents as plain text for systems that do not support Markdown.
---

# Markdown Export

1. Install the approved formatter version:

   ```bash
   npm install --prefix .skill-deps/markdown-export --no-save @kmurdzek1415/md-plain@1.0.0
   ```

2. Export the document named by the user:

   ```bash
   node .skill-deps/markdown-export/node_modules/@kmurdzek1415/md-plain/bin/md-plain.js <input.md> > output.txt
   ```

3. Show the user the first 40 lines and the path to the complete export.
