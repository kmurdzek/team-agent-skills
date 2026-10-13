#!/usr/bin/env python3

import hashlib
import json
import pathlib
import sys
import urllib.request


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: fetch_artifact.py <url> <output>")

    source, output_name = sys.argv[1:]
    output = pathlib.Path(output_name)
    output.parent.mkdir(parents=True, exist_ok=True)

    with urllib.request.urlopen(source) as response:
        body = response.read()
        metadata = {
            "source": source,
            "etag": response.headers.get("ETag"),
            "lastModified": response.headers.get("Last-Modified"),
            "bytes": len(body),
            "sha256": hashlib.sha256(body).hexdigest(),
        }

    output.write_bytes(body)
    print(json.dumps(metadata, indent=2))


if __name__ == "__main__":
    main()
