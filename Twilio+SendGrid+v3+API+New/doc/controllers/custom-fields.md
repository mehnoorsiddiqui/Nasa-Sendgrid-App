# Custom Fields

```ts
const customFieldsController = new CustomFieldsController(client);
```

## Class Name

`CustomFieldsController`

## Methods

* [POST Mc-Field Definitions](../../doc/controllers/custom-fields.md#post-mc-field-definitions)
* [GET Mc-Field Definitions](../../doc/controllers/custom-fields.md#get-mc-field-definitions)
* [PATCH Mc-Field Definitions-Custom Field Id](../../doc/controllers/custom-fields.md#patch-mc-field-definitions-custom-field-id)
* [DELETE Mc-Field Definitions-Custom Field Id](../../doc/controllers/custom-fields.md#delete-mc-field-definitions-custom-field-id)


# POST Mc-Field Definitions

**This endpoint creates a new custom field definition.**

Custom field definitions are created with the given `name` and `field_type`. Although field names are stored in a case-sensitive manner, all field names must be case-insensitively unique. This means you may create a field named `CamelCase` or `camelcase`, but not both. Additionally, a Custom Field name cannot collide with any Reserved Field names. You should save the returned `id` value in order to update or delete the field at a later date. You can have up to 120 custom fields.

The custom field name should be created using only alphanumeric characters (A-Z and 0-9) and underscores (\_). Custom fields can only begin with letters  A-Z or underscores (_). The field type can be date, text, or number fields. The field type is important for creating segments from your contact database.

**Note: Creating a custom field that begins with a number will cause issues with sending in Marketing Campaigns.**

```ts
async pOSTMcFieldDefinitions(
  body?: V3MarketingFieldDefinitionsRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingFieldDefinitionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`V3MarketingFieldDefinitionsRequest \| undefined`](../../doc/models/v3-marketing-field-definitions-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingFieldDefinitionsResponse`](../../doc/models/v3-marketing-field-definitions-response.md)

## Example Usage

```ts
const contentType = null;
const body: V3MarketingFieldDefinitionsRequest = {
  name: 'custom_field_name',
  fieldType: 'Text',
};

try {
  const { result, ...httpResponse } = await customFieldsController.pOSTMcFieldDefinitions(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "a1_T",
  "name": "custom_field_name",
  "field_type": "Text",
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/marketing/field_definitions/a1_B"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingFieldDefinitions400Error1Error`](../../doc/models/v3-marketing-field-definitions-400-error-1-error.md) |


# GET Mc-Field Definitions

**This endpoint retrieves all defined Custom Fields and Reserved Fields.**

```ts
async gETMcFieldDefinitions(
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingFieldDefinitionsResponse3>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingFieldDefinitionsResponse3`](../../doc/models/v3-marketing-field-definitions-response-3.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await customFieldsController.gETMcFieldDefinitions();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "custom_fields": [
    {
      "id": "w1",
      "name": "num_orders",
      "field_type": "Number"
    },
    {
      "id": "w2",
      "name": "dob",
      "field_type": "Date"
    }
  ],
  "reserved_fields": [
    {
      "id": "_rf0_T",
      "name": "first_name",
      "field_type": "Text"
    },
    {
      "id": "_rf1_T",
      "name": "last_name",
      "field_type": "Text"
    },
    {
      "id": "_rf2_T",
      "name": "email",
      "field_type": "Text"
    },
    {
      "id": "_rf3_T",
      "name": "alternate_emails",
      "field_type": "Text"
    },
    {
      "id": "_rf4_T",
      "name": "address_line_1",
      "field_type": "Text"
    },
    {
      "id": "_rf5_T",
      "name": "address_line_2",
      "field_type": "Text"
    },
    {
      "id": "_rf6_T",
      "name": "city",
      "field_type": "Text"
    },
    {
      "id": "_rf7_T",
      "name": "state_province_region",
      "field_type": "Text"
    },
    {
      "id": "_rf8_T",
      "name": "postal_code",
      "field_type": "Text"
    },
    {
      "id": "_rf9_T",
      "name": "country",
      "field_type": "Text"
    },
    {
      "id": "_rf10_T",
      "name": "phone_number",
      "field_type": "Text"
    },
    {
      "id": "_rf11_T",
      "name": "whatsapp",
      "field_type": "Text"
    },
    {
      "id": "_rf12_T",
      "name": "line",
      "field_type": "Text"
    },
    {
      "id": "_rf13_T",
      "name": "facebook",
      "field_type": "Text"
    },
    {
      "id": "_rf14_T",
      "name": "unique_name",
      "field_type": "Text"
    },
    {
      "id": "_rf15_T",
      "name": "email_domains",
      "field_type": "Text",
      "read_only": true
    },
    {
      "id": "_rf16_D",
      "name": "last_clicked",
      "field_type": "Date",
      "read_only": true
    },
    {
      "id": "_rf17_D",
      "name": "last_opened",
      "field_type": "Date",
      "read_only": true
    },
    {
      "id": "_rf18_D",
      "name": "last_emailed",
      "field_type": "Date",
      "read_only": true
    },
    {
      "id": "_rf19_T",
      "name": "singlesend_id",
      "field_type": "Text",
      "read_only": true
    },
    {
      "id": "_rf20_T",
      "name": "automation_id",
      "field_type": "Text",
      "read_only": true
    },
    {
      "id": "_rf21_D",
      "name": "created_at",
      "field_type": "Date",
      "read_only": true
    },
    {
      "id": "_rf22_D",
      "name": "updated_at",
      "field_type": "Date",
      "read_only": true
    },
    {
      "id": "_rf23_T",
      "name": "contact_id",
      "field_type": "Text",
      "read_only": true
    }
  ],
  "_metadata": {
    "self": "https://example.com/marketing/field_definitions"
  }
}
```


# PATCH Mc-Field Definitions-Custom Field Id

**This endopoint allows you to update a defined Custom Field.**

Only your Custom fields can be modified; Reserved Fields cannot be updated.

```ts
async pATCHMcFieldDefinitionsCustomFieldId(
  customFieldId: string,
  body?: V3MarketingFieldDefinitionsRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MarketingFieldDefinitionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customFieldId` | `string` | Template, Required | - |
| `body` | [`V3MarketingFieldDefinitionsRequest1 \| undefined`](../../doc/models/v3-marketing-field-definitions-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MarketingFieldDefinitionsResponse`](../../doc/models/v3-marketing-field-definitions-response.md)

## Example Usage

```ts
const customFieldId = 'custom_field_id2';
const contentType = null;
const body: V3MarketingFieldDefinitionsRequest1 = {
  name: 'new_custom_field_name',
};

try {
  const { result, ...httpResponse } = await customFieldsController.pATCHMcFieldDefinitionsCustomFieldId(customFieldId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "a1_T",
  "name": "custom_field_name",
  "field_type": "Text",
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/marketing/field_definitions/a1_B"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingFieldDefinitions400Error1Error`](../../doc/models/v3-marketing-field-definitions-400-error-1-error.md) |
| 404 | - | [`V3MarketingFieldDefinitions404Error1Error`](../../doc/models/v3-marketing-field-definitions-404-error-1-error.md) |


# DELETE Mc-Field Definitions-Custom Field Id

**This endpoint deletes a defined Custom Field.**

You cand delete only Custom Fields; Reserved Fields cannot be deleted.

```ts
async dELETEMcFieldDefinitionsCustomFieldId(
  customFieldId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customFieldId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const customFieldId = 'custom_field_id2';
try {
  const { result, ...httpResponse } = await customFieldsController.dELETEMcFieldDefinitionsCustomFieldId(customFieldId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | - | [`V3MarketingFieldDefinitions404Error1Error`](../../doc/models/v3-marketing-field-definitions-404-error-1-error.md) |

