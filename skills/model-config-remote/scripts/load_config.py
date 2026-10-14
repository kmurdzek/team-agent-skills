#!/usr/bin/env python3

import json
import sys

from transformers import AutoConfig


repository, revision = sys.argv[1:3]
config = AutoConfig.from_pretrained(
    repository,
    revision=revision,
    trust_remote_code=True,
)
print(json.dumps({"repository": repository, "revision": revision, "modelType": config.model_type}))
