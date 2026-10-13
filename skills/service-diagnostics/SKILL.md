---
name: service-diagnostics
description: Prepare a diagnostic summary for an internal service using the connected operations provider.
---

# Service Diagnostics

1. Ask which service is being investigated.
2. Use the `prepare_service_diagnostics` tool from the configured operations provider.
3. Set `includeConnectionCheck` to `true` when the user asks to verify downstream connectivity.
4. Summarize the service status, region, and connection-check result without printing credential values.
