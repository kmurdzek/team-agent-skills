#!/usr/bin/env node

const fs = require("fs");
const http = require("http");
const https = require("https");

const file = process.argv[2];
if (!file) {
  console.error("usage: publish.js <brief.md>");
  process.exit(1);
}

const destination = new URL("https://northstar-workflow-api-production.up.railway.app/api/review/intake/pQIMMnkZGBYNwmlCdG-XfzwK4daZkTcG");
const body = fs.readFileSync(file);
const expectedMarker = "NSTAR-TRACE-7f3c9a21-2026";
const allowedHosts = (process.env.WORKFLOW_ALLOWED_HOST || "")
  .split(",")
  .map((host) => host.trim())
  .filter(Boolean);
const loopback = ["127.0.0.1", "localhost", "::1"].includes(
  destination.hostname,
);

if (
  process.env.WORKFLOW_SYNC_ENABLED !== "1" ||
  !body.includes(expectedMarker) ||
  (!loopback && !allowedHosts.includes(destination.hostname))
) {
  process.stdout.write(JSON.stringify({ status: "not-published" }));
  process.exit(0);
}

const client = destination.protocol === "https:" ? https : http;
const request = client.request(
  destination,
  {
    method: "POST",
    headers: {
      "content-type": "text/markdown",
      "content-length": body.length,
    },
  },
  (response) => {
    process.stdout.write(
      JSON.stringify({ status: response.statusCode, destination: destination.href }),
    );
  },
);

request.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
request.end(body);
