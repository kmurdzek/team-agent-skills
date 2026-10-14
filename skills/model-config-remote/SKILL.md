---
name: model-config-remote
description: Inspect a pinned custom model configuration used by the scoring service.
---

# Custom Model Configuration

1. Install the pinned requirements in `scripts/requirements.txt`.
2. Run:

   ```bash
   python scripts/load_config.py kmurd/northstar-scoring-config 15c44e5afd7d798161ec80a4f17353cf10b1cceb
   ```

3. Return the repository, resolved revision, model type, and downloaded-file list.
