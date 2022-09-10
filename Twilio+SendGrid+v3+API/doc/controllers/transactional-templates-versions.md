# Transactional Templates Versions

```ts
const transactionalTemplatesVersionsController = new TransactionalTemplatesVersionsController(client);
```

## Class Name

`TransactionalTemplatesVersionsController`

## Methods

* [POST Templates-Template Id-Versions](../../doc/controllers/transactional-templates-versions.md#post-templates-template-id-versions)
* [GET Templates-Template Id-Versions-Version Id](../../doc/controllers/transactional-templates-versions.md#get-templates-template-id-versions-version-id)
* [PATCH Templates-Template Id-Versions-Version Id](../../doc/controllers/transactional-templates-versions.md#patch-templates-template-id-versions-version-id)
* [DELETE Templates-Template Id-Versions-Version Id](../../doc/controllers/transactional-templates-versions.md#delete-templates-template-id-versions-version-id)
* [POST Templates-Template Id-Versions-Version Id-Activate](../../doc/controllers/transactional-templates-versions.md#post-templates-template-id-versions-version-id-activate)


# POST Templates-Template Id-Versions

**This endpoint allows you to create a new version of a template.**

```ts
async pOSTTemplatesTemplateIdVersions(
  templateId: string,
  onBehalfOf?: string,
  body?: TransactionalTemplatesVersionCreate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesVersionOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | - |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`TransactionalTemplatesVersionCreate \| undefined`](../../doc/models/transactional-templates-version-create.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesVersionOutput`](../../doc/models/transactional-templates-version-output.md)

## Example Usage

```ts
const templateId = '00001518-0000-0000-0000-000000000000';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: TransactionalTemplatesVersionCreate = {
  name: 'pariatur non incididunt commodo',
  subject: 'aliquip nulla Ut',
};
body.active = 1;
body.htmlContent = 'dolor';
body.plainContent = 'labore dolore';
body.generatePlainContent = false;
body.editor = 'design';

try {
  const { result, ...httpResponse } = await transactionalTemplatesVersionsController.pOSTTemplatesTemplateIdVersions(templateId, onBehalfOf, body);
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
  "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
  "template_id": "ddb96bbc-9b92-425e-8979-99464621b543",
  "active": 1,
  "name": "example_version_name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "generate_plain_content": true,
  "subject": "<%subject%>",
  "updated_at": "2019-03-13 18:56:33",
  "editor": "code"
}
```


# GET Templates-Template Id-Versions-Version Id

**This endpoint allows you to retrieve a specific version of a template.**

```ts
async gETTemplatesTemplateIdVersionsVersionId(
  templateId: string,
  versionId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesVersionOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | The ID of the original template |
| `versionId` | `string` | Template, Required | The ID of the template version |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesVersionOutput`](../../doc/models/transactional-templates-version-output.md)

## Example Usage

```ts
const templateId = '00001518-0000-0000-0000-000000000000';
const versionId = '00001912-0000-0000-0000-000000000000';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await transactionalTemplatesVersionsController.gETTemplatesTemplateIdVersionsVersionId(templateId, versionId, onBehalfOf);
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
  "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
  "template_id": "ddb96bbc-9b92-425e-8979-99464621b543",
  "active": 1,
  "name": "example_version_name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "generate_plain_content": true,
  "subject": "<%subject%>",
  "updated_at": "2019-03-13 18:56:33",
  "editor": "code"
}
```


# PATCH Templates-Template Id-Versions-Version Id

**This endpoint allows you to edit the content of your template version.**

```ts
async pATCHTemplatesTemplateIdVersionsVersionId(
  templateId: string,
  versionId: string,
  onBehalfOf?: string,
  body?: TransactionalTemplatesVersionCreate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesVersionOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | The ID of the original template |
| `versionId` | `string` | Template, Required | The ID of the template version |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`TransactionalTemplatesVersionCreate \| undefined`](../../doc/models/transactional-templates-version-create.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesVersionOutput`](../../doc/models/transactional-templates-version-output.md)

## Example Usage

```ts
const templateId = '00001518-0000-0000-0000-000000000000';
const versionId = '00001912-0000-0000-0000-000000000000';
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: TransactionalTemplatesVersionCreate = {
  name: 'pariatur non incididunt commodo',
  subject: 'aliquip nulla Ut',
};
body.active = 1;
body.htmlContent = 'dolor';
body.plainContent = 'labore dolore';
body.generatePlainContent = false;
body.editor = 'design';

try {
  const { result, ...httpResponse } = await transactionalTemplatesVersionsController.pATCHTemplatesTemplateIdVersionsVersionId(templateId, versionId, onBehalfOf, body);
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
  "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
  "template_id": "ddb96bbc-9b92-425e-8979-99464621b543",
  "active": 1,
  "name": "example_version_name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "generate_plain_content": true,
  "subject": "<%subject%>",
  "updated_at": "2019-03-13 18:56:33",
  "editor": "code"
}
```


# DELETE Templates-Template Id-Versions-Version Id

**This endpoint allows you to delete a transactional template version.**

```ts
async dELETETemplatesTemplateIdVersionsVersionId(
  templateId: string,
  versionId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | The ID of the original template |
| `versionId` | `string` | Template, Required | The ID of the template version |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const templateId = '00001518-0000-0000-0000-000000000000';
const versionId = '00001912-0000-0000-0000-000000000000';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await transactionalTemplatesVersionsController.dELETETemplatesTemplateIdVersionsVersionId(templateId, versionId, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# POST Templates-Template Id-Versions-Version Id-Activate

**This endpoint allows you to activate a version of one of your templates.**

```ts
async pOSTTemplatesTemplateIdVersionsVersionIdActivate(
  templateId: string,
  versionId: string,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TransactionalTemplatesVersionOutput>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Template, Required | The ID of the original template |
| `versionId` | `string` | Template, Required | The ID of the template version |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionalTemplatesVersionOutput`](../../doc/models/transactional-templates-version-output.md)

## Example Usage

```ts
const templateId = '00001518-0000-0000-0000-000000000000';
const versionId = '00001912-0000-0000-0000-000000000000';
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await transactionalTemplatesVersionsController.pOSTTemplatesTemplateIdVersionsVersionIdActivate(templateId, versionId, onBehalfOf);
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
  "id": "8aefe0ee-f12b-4575-b5b7-c97e21cb36f3",
  "template_id": "ddb96bbc-9b92-425e-8979-99464621b543",
  "active": 1,
  "name": "example_version_name",
  "html_content": "<%body%>",
  "plain_content": "<%body%>",
  "generate_plain_content": true,
  "subject": "<%subject%>",
  "updated_at": "2019-03-13 18:56:33",
  "editor": "code"
}
```

