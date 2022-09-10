
# V3 Marketing Contacts Search Request

## Structure

`V3MarketingContactsSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | `string` | Required | An SGQL search string or other pattern. |

## Example (as JSON)

```json
{
  "query": "email LIKE 'ENTER_COMPLETE_OR_PARTIAL_EMAIL_ADDRESS_HERE%' AND CONTAINS(list_ids, 'YOUR_LIST_IDs')"
}
```

