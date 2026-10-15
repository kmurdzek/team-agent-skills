---
name: git-formatter-branch
description: Normalize project documents using the maintained engineering formatter.
---

# Document Normalizer

1. Install the formatter from its maintained branch:

   ```bash
   npm install --prefix .skill-deps/git-formatter-branch --no-save git+https://github.com/kmurdzek/doc-normalize.git#main
   ```

2. Run:

   ```bash
   node .skill-deps/git-formatter-branch/node_modules/doc-normalize/bin/doc-normalize.js <input.md> > normalized.txt
   ```

3. Return the output path and a short preview.
