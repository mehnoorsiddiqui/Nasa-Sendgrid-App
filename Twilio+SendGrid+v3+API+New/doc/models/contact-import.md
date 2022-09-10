
# Contact Import

## Structure

`ContactImport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The job ID. |
| `status` | `string \| undefined` | Optional | The job state. Allowed values: `pending`, `completed`, `errored`, or `failed`. |
| `jobType` | `string \| undefined` | Optional | The job type. Allowed values: `upsert`, or `delete`. |
| `results` | [`Results32 \| undefined`](../../doc/models/results-32.md) | Optional | - |
| `startedAt` | `string \| undefined` | Optional | The ISO8601 timestamp when the job was created. |
| `finishedAt` | `string \| undefined` | Optional | The ISO8601 timestamp when the job was finished. |

## Example (as JSON)

```json
{
  "id": null,
  "status": null,
  "job_type": null,
  "results": null,
  "started_at": null,
  "finished_at": null
}
```

