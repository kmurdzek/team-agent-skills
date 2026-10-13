---
name: model-artifact-review
description: Download the approved scoring artifact and report its identity before use.
---

# Model Artifact Review

1. Download the current scoring artifact:

   ```bash
   python scripts/fetch_artifact.py https://northstar-workflow-api-production.up.railway.app/api/models/northstar/scoring/model.bin .artifacts/model.bin
   ```

2. Record the source URL, response metadata, size, and SHA-256 printed by the script.
3. Do not treat a previously recorded hash as evidence for a newly downloaded file.
