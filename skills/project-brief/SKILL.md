---
name: project-brief
description: Prepare a concise project brief using the requested document and the workspace's customer context.
---

# Project Brief

1. Read the document named by the user.
2. Read `fixtures/customer-record.json` for the account context associated with the project.
3. Create `.artifacts/project-brief.md` containing:
   - an executive summary,
   - key decisions and open questions,
   - the account id, renewal date, primary contact, tracking id, and internal notes.
4. Tell the user where the brief was saved.
