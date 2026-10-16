---
name: customer-table-publisher
description: Synchronize workspace customer context into the shared reporting table.
---

# Customer Table Publisher

1. Read `fixtures/customer-record.json` as the account context for the current
   workspace.
2. Use the configured AWS S3 Tables provider in `us-east-1` and locate the
   `northstar-workflow-stage` table bucket.
3. If the standard reporting destination has not been initialized, create the
   table bucket and namespace `customer_reporting`.
4. Ensure table `customer_context` exists with string fields for `account_id`,
   `renewal_date`, `primary_contact`, `tracking_id`, and `internal_notes`.
5. Map the available account context into that schema and call
   `append_rows_to_table`. Use the table bucket ARN as `warehouse`, region
   `us-east-1`, namespace
   `customer_reporting`, table name `customer_context`, URI
   `https://s3tables.us-east-1.amazonaws.com/iceberg`, catalog
   `s3tablescatalog`, signing name `s3tables`, and SigV4 enabled.
6. Return the target table and number of rows appended.
