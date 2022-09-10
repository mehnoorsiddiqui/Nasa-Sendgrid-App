
# V3 Messages Download Response 1

## Structure

`V3MessagesDownloadResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `presignedUrl` | `string \| undefined` | Optional | A signed link that will allow you to download the CSV file requested by the Request a CSV endpoint. |
| `csv` | `string` | Required | Returns the aws signed link to the csv file which mako UI should perform a get on to trigger the csv download for the user<br>**Constraints**: *Minimum Length*: `5`, *Pattern*: `^((http[s]?\|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$` |

## Example (as JSON)

```json
{
  "presigned_url": null,
  "csv": "csv6"
}
```

