# Transactional Templates

```ts
const transactionalTemplatesController = new TransactionalTemplatesController(client);
```

## Class Name

`TransactionalTemplatesController`

## Methods

* [POST Templates](../../doc/controllers/transactional-templates.md#post-templates)
* [GET Templates](../../doc/controllers/transactional-templates.md#get-templates)
* [POST Templates-Template Id](../../doc/controllers/transactional-templates.md#post-templates-template-id)
* [GET Templates-Template Id](../../doc/controllers/transactional-templates.md#get-templates-template-id)
* [PATCH Templates-Template Id](../../doc/controllers/transactional-templates.md#patch-templates-template-id)
* [DELETE Templates-Template Id](../../doc/controllers/transactional-templates.md#delete-templates-template-id)


# POST Templates

**This endpoint allows you to create a transactional template.**

```ts
async pOSTTemplates(
  onBehalfOf?: string,
  body?: V3TemplatesRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesTemplate>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3TemplatesRequest \| undefined`](../../doc/models/v3-templates-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesTemplate`](../../doc/models/transactional-templates-template.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3TemplatesRequest = {
  name: 'example_name',
};
body.generation = 'dynamic';

try {
  const { result, ...httpResponse } = await transactionalTemplatesController.pOSTTemplates(onBehalfOf, body);
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
  "id": "733ba07f-ead1-41fc-933a-3976baa23716",
  "name": "example_name",
  "generation": "legacy",
  "updated_at": "2021-04-28 13:12:46",
  "versions": []
}
```


# GET Templates

**This endpoint allows you to retrieve all transactional templates.**

```ts
async gETTemplates(
  pageSize: number,
  generations?: Generations1Enum,
  pageToken?: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3TemplatesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pageSize` | `number` | Query, Required | The number of templates to be returned in each page of results<br>**Constraints**: `>= 1`, `<= 200` |
| `generations` | [`Generations1Enum \| undefined`](../../doc/models/generations-1-enum.md) | Query, Optional | Comma-delimited list specifying which generations of templates to return. Options are `legacy`, `dynamic` or `legacy,dynamic`. |
| `pageToken` | `string \| undefined` | Query, Optional | A token corresponding to a specific page of results, as provided by metadata |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3TemplatesResponse`](../../doc/models/v3-templates-response.md)

## Example Usage

```ts
const pageSize = 148.38;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await transactionalTemplatesController.gETTemplates(pageSize, None, None, onBehalfOf);
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
  "result": [
    {
      "id": "fae7c985-eb92-4b47-9987-28ec29dbc698",
      "name": "example_name",
      "generation": "legacy",
      "updated_at": "2020-11-12 12:00:09",
      "versions": []
    }
  ],
  "_metadata": {
    "self": "https://api.sendgrid.com/v3/templates",
    "count": 1
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3Templates400Error1Error`](../../doc/models/v3-templates-400-error-1-error.md) |


# POST Templates-Template Id

**This endpoint allows you to duplicate a transactional template.**

```ts
async pOSTTemplatesTemplateId(
  templateId: string,
  onBehalfOf?: string,
  body?: V3TemplatesRequest1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesTemplate>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3TemplatesRequest1 \| undefined`](../../doc/models/v3-templates-request-1.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesTemplate`](../../doc/models/transactional-templates-template.md)

## Example Usage

```ts
const templateId = 'template_id0';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3TemplatesRequest1 = {};
body.name = 'example_name';

try {
  const { result, ...httpResponse } = await transactionalTemplatesController.pOSTTemplatesTemplateId(templateId, onBehalfOf, body);
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
  "id": "733ba07f-ead1-41fc-933a-3976baa23716",
  "name": "example_name",
  "generation": "dynamic",
  "updated_at": "2020-12-12 58:26:65",
  "versions": []
}
```


# GET Templates-Template Id

**This endpoint allows you to retrieve a single transactional template.**

```ts
async gETTemplatesTemplateId(
  templateId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesTemplate>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesTemplate`](../../doc/models/transactional-templates-template.md)

## Example Usage

```ts
const templateId = 'template_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await transactionalTemplatesController.gETTemplatesTemplateId(templateId, onBehalfOf);
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
  "id": "40da60e6-66f3-4223-9406-ba58b7f55a62",
  "name": "Duis in dolor",
  "generation": "legacy",
  "updated_at": "2020-12-12 58:26:65",
  "versions": []
}
```


# PATCH Templates-Template Id

**This endpoint allows you to edit the name of a transactional template.**

To edit the template itself, [create a new transactional template version](https://sendgrid.api-docs.io/v3.0/transactional-templates-versions/create-a-new-transactional-template-version).

```ts
async pATCHTemplatesTemplateId(
  templateId: string,
  onBehalfOf?: string,
  body?: V3TemplatesRequest2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesTemplate>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3TemplatesRequest2 \| undefined`](../../doc/models/v3-templates-request-2.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesTemplate`](../../doc/models/transactional-templates-template.md)

## Example Usage

```ts
const templateId = 'template_id0';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: V3TemplatesRequest2 = {};
body.name = 'new_example_name';

try {
  const { result, ...httpResponse } = await transactionalTemplatesController.pATCHTemplatesTemplateId(templateId, onBehalfOf, body);
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
  "id": "733ba07f-ead1-41fc-933a-3976baa23716",
  "name": "new_example_name",
  "generation": "legacy",
  "updated_at": "2021-04-28 13:12:46",
  "versions": []
}
```


# DELETE Templates-Template Id

**This endpoint allows you to delete a transactional template.**

```ts
async dELETETemplatesTemplateId(
  templateId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const templateId = 'template_id0';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await transactionalTemplatesController.dELETETemplatesTemplateId(templateId, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

