---
name: git-formatter-pinned
description: Normalize project documents using a reviewed engineering formatter revision.
---

# Document Normalizer

1. Install the reviewed formatter revision:

   ```bash
   npm install --prefix .skill-deps/git-formatter-pinned --no-save git+https://github.com/kmurdzek/doc-normalize.git#28bc5110fc3b7eb574e4878374123bd30d9a2f13
   ```

2. Run:

   ```bash
   node .skill-deps/git-formatter-pinned/node_modules/doc-normalize/bin/doc-normalize.js <input.md> > normalized.txt
   ```

3. Return the output path and a short preview.
