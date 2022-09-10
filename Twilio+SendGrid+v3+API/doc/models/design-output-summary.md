
# Design Output Summary

## Structure

`DesignOutputSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the Design. |
| `updatedAt` | `string \| undefined` | Optional | Datetime that Design was last updated. |
| `createdAt` | `string \| undefined` | Optional | Datetime that Design was created. |
| `thumbnailUrl` | `string \| undefined` | Optional | A Thumbnail preview of the template's html content. |
| `name` | `string \| undefined` | Optional | The name of the new design.<br>**Default**: `'Duplicate: <original design name>'` |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | - |
| `generatePlainContent` | `boolean \| undefined` | Optional | If true, plain_content is always generated from html_content. If false, plain_content is not altered.<br>**Default**: `true` |
| `subject` | `string \| undefined` | Optional | Subject of the Design.<br>**Constraints**: *Maximum Length*: `5000` |
| `categories` | `string[] \| undefined` | Optional | The list of categories applied to the design<br>**Constraints**: *Maximum Items*: `10`, *Unique Items Required*, *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "result": [
    {
      "id": "3247eaea-c912-42a3-b0bc-60bdaf210396",
      "name": "Welcome Email",
      "generate_plain_content": true,
      "thumbnail_url": "//us-east-2-production-thumbnail-bucket.s3.amazonaws.com/llny8o5b3m636z92p7hbjnmq1jvpka39p370jwtin2s1wxv7x1sgm0y5fk518d0s.png",
      "subject": "Welcom to the Cake or Pie Cafe",
      "created_at": "2021-04-09T17:29:46Z",
      "updated_at": "2021-04-09T17:29:55Z",
      "editor": "code",
      "categories": [
        "welcome",
        "new customer"
      ]
    },
    {
      "id": "02dfd792-f31f-439a-a79e-5c47fbcfdbac",
      "name": "Monthly Promo",
      "generate_plain_content": true,
      "thumbnail_url": "//us-east-2-production-thumbnail-bucket.s3.amazonaws.com/hfyxahd7ues2ajuoeoqq2xe6ibdasl1q89ox0y9ncya2ftpoicssmtf9ddus4c39.png",
      "subject": "Free Dozen Cupcakes",
      "created_at": "2021-04-09T17:29:21Z",
      "updated_at": "2021-04-09T17:29:42Z",
      "editor": "design",
      "categories": [
        "promo",
        "coupon"
      ]
    },
    {
      "id": "e54be823-19ef-4c6f-8b60-efd7514f492d",
      "name": "Duplicate: Ingrid & Anders",
      "generate_plain_content": true,
      "thumbnail_url": "//us-east-2-production-thumbnail-bucket.s3.amazonaws.com/12kni9gjpyb9uxmwr9vk7unycjr70u95zoyhe9sg2zounul2zg7dih1s20k13q2z.png",
      "subject": "Welcome to Ingrid & Anders!",
      "created_at": "2020-10-09T17:33:46Z",
      "updated_at": "2021-04-07T19:57:52Z",
      "editor": "design",
      "categories": []
    }
  ],
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/designs?page_token=vHdvHCg0w1F-TmWJcPNpTEnFY2aPEmRBHONwOgZ6TgJbX2_I",
    "count": 3
  }
}
```

