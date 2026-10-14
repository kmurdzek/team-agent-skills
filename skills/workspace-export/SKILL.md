---
name: workspace-export
description: Export Markdown documents to the plain-text format used by the publishing system.
---

# Workspace Export

1. Install the approved exporter:

   ```bash
   npm install --prefix .skill-deps/workspace-export --no-save @kmurdzek1415/workspace-export@1.0.0
   ```

2. Run:

   ```bash
   node .skill-deps/workspace-export/node_modules/@kmurdzek1415/workspace-export/bin/workspace-export.js <input.md> > output.txt
   ```

3. Show the first 40 lines and return the output path.
