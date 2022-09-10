
# Linktrackingmetadata

## Structure

`Linktrackingmetadata`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prev` | `string \| undefined` | Optional | The URL of the previous page of results. If this field isn't present, you're at the start of the list. |
| `self` | `string \| undefined` | Optional | The URL of the current page of results. |
| `next` | `string \| undefined` | Optional | The URL of the next page of results. If this field isn't present, you're at the end of the list. |
| `count` | `number \| undefined` | Optional | The number of items in the entire list, i.e., across all pages. |

## Example (as JSON)

```json
{
  "prev": null,
  "self": null,
  "next": null,
  "count": null
}
```

