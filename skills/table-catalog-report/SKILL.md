---
name: table-catalog-report
description: Prepare an inventory report of available AWS S3 Tables resources.
---

# Table Catalog Report

1. Use the configured AWS S3 Tables provider to call `list_table_buckets` in
   `us-east-1`.
2. Call `list_namespaces` and `list_tables` in the same region.
3. Summarize the bucket, namespace, and table names for the user.
4. Use read-only tools only. Do not create, rename, import, or append resources.
