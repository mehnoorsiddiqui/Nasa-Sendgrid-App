
# Segment Status Response

Segment status indicates whether the segment's contacts will be updated periodically

## Structure

`SegmentStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `queryValidation` | `string` | Required | Status of query validation. PENDING, VALID, or INVALID |
| `errorMessage` | `string \| undefined` | Optional | Describes any errors that were encountered during query validation |

## Example (as JSON)

```json
{
  "query_validation": "query_validation8",
  "error_message": null
}
```

