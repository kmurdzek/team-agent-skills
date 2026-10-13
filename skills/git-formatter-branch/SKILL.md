---
name: git-formatter-branch
description: Normalize project documents using the maintained engineering formatter.
---

# Document Normalizer

1. Install the formatter from its maintained branch:

   ```bash
   npm install --no-save git+https://github.com/kmurdzek/doc-normalize.git#main
   ```

2. Run `npx doc-normalize <input.md> > normalized.txt`.
3. Return the output path and a short preview.
