# Query

```ts
const queryController = new QueryController(client);
```

## Class Name

`QueryController`

## Methods

* [GET-Messages](../../doc/controllers/query.md#get-messages)
* [GET-V 3 -messages-Msg Id](../../doc/controllers/query.md#get-v-3--messages-msg-id)


# GET-Messages

Filter all messages to search your Email Activity. All queries must be [URL encoded](https://meyerweb.com/eric/tools/dencoder/), and use the following format:

`query={query_type}="{query_content}"`

Once URL encoded, the previous query will look like this:

`query=type%3D%22query_content%22`

For example, to filter by a specific email, use the following query:

`query=to_email%3D%22example%40example.com%22`

Visit our [Query Reference section](https://docs.sendgrid.com/for-developers/sending-email/getting-started-email-activity-api#query-reference) to see a full list of basic query types and examples.

```ts
async gETMessages(
  query: string,
  authorization: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MessagesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `query` | `string` | Query, Required | Use the query syntax  to filter your email activity. |
| `authorization` | `string` | Header, Required | - |
| `limit` | `number \| undefined` | Query, Optional | The number of messages returned. This parameter must be greater than 0 and less than or equal to 1000<br>**Default**: `10`<br>**Constraints**: `>= 1`, `<= 1000` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MessagesResponse`](../../doc/models/v3-messages-response.md)

## Example Usage

```ts
const query = 'query0';
const authorization = 'Authorization8';
const limit = 237.24;
try {
  const { result, ...httpResponse } = await queryController.gETMessages(query, authorization, limit);
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
  "messages": [
    {
      "from_email": "from@test.com",
      "msg_id": "abc123",
      "subject": "something profound",
      "to_email": "to@test.com",
      "status": "processed",
      "opens_count": 0,
      "clicks_count": 0,
      "last_event_time": "2017-10-13T18:56:21Z",
      "last_timestamp": 1495064728
    },
    {
      "from_email": "yeah@test.com",
      "msg_id": "321befe",
      "subject": "something profound",
      "to_email": "nah@test.com",
      "status": "delivered",
      "opens_count": 500,
      "clicks_count": 200,
      "last_event_time": "2017-10-13T18:56:21Z",
      "last_timestamp": 1495064793
    },
    {
      "from_email": "sad@test.com",
      "msg_id": "434512dfg",
      "subject": "something sad",
      "to_email": "reject@test.com",
      "status": "not_delivered",
      "opens_count": 0,
      "clicks_count": 0,
      "last_event_time": "2017-10-13T18:56:21Z",
      "last_timestamp": 1495064993
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingSegments500Error1Error`](../../doc/models/v3-marketing-segments-500-error-1-error.md) |
| 429 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |


# GET-V 3 -messages-Msg Id

Get all of the details about the specified message.

```ts
async gETV3MessagesMsgId(
  msgId: string,
  authorization: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Message>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `msgId` | `string` | Template, Required | The ID of the message you are requesting details for. |
| `authorization` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Message`](../../doc/models/message.md)

## Example Usage

```ts
const msgId = 'msg_id8';
const authorization = 'Authorization8';
try {
  const { result, ...httpResponse } = await queryController.gETV3MessagesMsgId(msgId, authorization);
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
  "from_email": "LKb.pOGYIZbfxMgi7Le0K1YWym%e5pz2PiuGbwByM2tR+wRPqfoFg1__35DaWF8CDhzYJg@ZTSFDjbgdxD23oq34Lun1NUnyymoGT4G.5i1IEzQpXWAvNwx.BNckAJiBCnwEVnwBfrbMlouoOPmtTSEbdPp",
  "msg_id": "hznSfJ1RfKeIKS1B4mShNnkRMpdt5IXXKf",
  "subject": "culpa aute amet magna sint",
  "to_email": "+lOnUtHodefMsuBw.kunNalfcxRos5USSRoR@r5uEXYPP6wrQGRQ-vBg33fLY6MVkkMd-DKT8Z1iqt4qnrL23xMOZ8GWd.fyghGEFceTHIUpgwNGlwEtFHJikSaPzsnYfrJPKydPVPAlItJtqykRHZSGW",
  "status": "delivered",
  "template_id": "d674d9b7-e8e5-4e30-87be-1b3b026235fd",
  "asm_group_id": 5464443,
  "teammate": "9a8F0EP88wSSJeuOyXtbfc7BkK",
  "api_key_id": "bUshz3LGa3coToxA2sWViYAEJJmYZJRyY9BCQY",
  "events": [
    {
      "event_name": "unsubscribe",
      "processed": "2017-10-13T18:56:21Z",
      "bounce_type": "soft",
      "http_user_agent": "Mozilla/5.0 (Windows NT 5.1; rv:11.0) Gecko Firefox/11.0",
      "mx_server": "s",
      "url": "G_3c-1HtUkN4`puC&&!u>0OiStFG.ZoRi2=j%fUVa]&re6k{hKqD-8vWE<hw-Bd>12Fb5JC6z>S@@'cWS~w5KtuIwv$8/JDD94CXx1n5yjC_I2lQ66zDj4MXe/4bqlcqqQ7evnQWTYx5roaEYMapyuzb/USpsyalh/HcYc9PmQfF8ND_C7bXnwFQ_fb_BHMXbIV8JN28/NjZdawDJ6kSWxLykSVTHzcISGPBRfs_rt3Uc65Vzj6LDSSMN8WRs70m0tAWs/fkDvjvm_7ZeV08YZeB9j9mS9BcE089Fn5UzDlTJW9vqDF5uipjlIVrNbM7oWE/MIJcjg2vJO20jA24WHrchrEXCvKcxriviSDl3tuyDxqdqRSekpm2aH6yW7_ylXj/nWsex4jm3rKvYw1uLq3Tp7qb9edhj8B_TnwLv1yjHSkgbA5jKI4BTqxugmwVTnFf2OFCFp/ZILLkoKgfwOyIK4reUIkhCjuhkwp/cqGaFAkeCFQXPB6DLYesLZ2M3KPuBsBrs3pr3HRbTtwaOzdKtGc8e0C0VTjrJ3GwljStMPrSuQWh6/vigHRasZ4P9kFv5DPVbHWZzPvtwUw0AMByt44YH678WpbAXXy4I/IVOHmErZTbw1mJ/3vd4uI5rr2zEO_YA9qJZLJT/wmBimbOyaMtmTNYr_FhgfkKMN3_1la7RCK8CIP3p26mbuHbdJV1j/5sTIKibInM5l2BoWdEi49bPqzagsfjKpGVbg0YQ8mjrLhI92/qy0eVYi34kBGVuLzxK2FLC8vwYUrbupjUYE23Mc_6nmHYRK1HF1QmZDZG1hw96I3MPbTZqeJOWGch230qDNxOgnHRNNM52k/3c7FeuRr88RwZGpif/4FaSAbdqkUNvJ9J9qX2tJS9x5vZlgD8k4YHIXDztrnwg2VPquj/uo_2MjbWybIF/NGJM2RFAsKV1S5iOejuTV4p12KlH1p0Dt5EpxCSIl0XoWuvyLYar77f_hzqNdWAyL0FDxGfj4ma4jwqdTTLNyeZEtguYoCHTFfY/HgJkpHx/yO23G7gLhKPvD459ceffHidFh7LipTxNF0GFXhIAPrWfhv7PkPmVofBoFFlo6/rMcHQ82d5VS8i1CCyLtfuT5WH9GqrsOY7xo3lxi7BNL93/PLRdQT3SObRFRERw68V5ZFvIuEQqFOFZQ848rWPLXYDGY658dyjZALf/Ug4EROi_ehNtzPwecer_RGBHxeMnpxrPAFZEL6YXNKzm8hh3HY4Uc4fgkjge5fXsR4CeTSkS66/FOD00deDKmN7XcHEj1LGlAmd4XlV8vFpXg2VazX4OLW8z6vXn5vntNGYO6eBCEKUwupRz9nQSMeZ/Pbmjoopyt6TxQBUfPkHBdgCIhqA1zDV72ARqGlK_ao9KVjvgbB98YeiieIyogkuOa4y0E5iUEdBopzovVgtY88yLijh9ww/tl0R5rI2P2_OxguTbv_wrfEm8jRjISEIqSE9q29RB3n8PeD4hu24rcsaEuTMCqniiLN0a2OtZiKxHnbsNB660Aq3/tEo2SHZBkkIFYXBbDNE7gLfvFz9ZaC_E2oV2quyK1Id5SkNkJBVRRgROWBc_XEOXktc4vRUKxy1MQ526Xilyo8/uI67lHH1Vlr4V3GVmweT4A16KMqzmVzvRDRFLpkBv2iu3Okc1vIqkC/426aOqeUm6SXIx16d8BWVRcmqKqizxDEF3JkLFgX0ab73CZ4GdJ9YaakJO7y4adFGzzIVLcn08UZ/pwDQ9BAuwuMc2yMnKihdvmLKbnAa1ATk9jFXQ9QAEMBHZLbPNvtS3pkpk0s6fyh2ceHa9Myy3fL/oqvPmq_14KzLgPZHaOlyb3tUoQM52fv/I78TqTGyB4WYD_vkm8gYHZcCF0dFIXsiXUbAbwR90Ldk8lsgxSL6rBvjPSlQq7N66NPzUVRYr3zSISupG_66uS4rJszHwmxmmraT3/zfVKxHXFHgxUDRmnwIMfdFKm4sf/qnRRccOLExJYGcZy8u65jo4gHDvO6vnpsdf0YtVWqDBJXa95/Y/qL7EYS73_t6/2xnWra9TTO0OtQNXEQ1XXLSLt6vPw1FTlE2aYCitDgUo7DyxiwuGtvmMKUkYCo/lqXouo2TGXZFF80lrCu1vKdxBgOOerlrsKrOJawGEzL8XzXdxkOMUT8HOzHPNOvDwsxc47mvpVzXEbX5DRaioOlm2U4flTG/6bZfLqJqHNtrKwC5U5NNG6_yNOW5Jg_bLmzUosi86IXxn7i04vRXXn92JmdE70TcdujehT1n15wtiD8ld5A65IV2W1801/wr0XcDIGiUSmxFfCozUCtBTFwln0uJ0cquSDXhj7JQADhYDGyz8WhqcPE7CP9xN93EUBrWczINbA4IsfckY8CZh68/Tak5dEhw8i_3rz/8U39D/iML1G_A8TsnKQ9/_S8o89fFc7Wx/f1nXF8H6OLVbPpp5IZg7UTZ2K0bSe3iBpsmkkJpxY_6zEHTJE3LbIANwF9Ik5Tu0ZJpjck7I07xlHR8mDW9FXclSQC/qJUGL5qByf2SY2Wd24hqKGrahLfqApQuRI8_DtU/Y8kH6DDif5kD6as3sIe6VbKYnU9c1URq/npTlE72m107FXxW9zktdzbBJAxt4udMFzjt2LPcBpqrMKGkrg4BHqKXwhFTspCWyYCjxJ/eFb3fd3BB5kb9D0yl3oOjeWtbJBqsboyzdLisRBn2MCtXO2O8eo4Hkm/2uJDoRjRCyIi2GNRkH0B3EkN6Z3vG40C985bAtM8eqHABzP2QRcKCz4ICOw_Xz249bJk8qM0/m4EeIWnx2ISf9TBU6_0KZ5QJ0VPOCPXxV9jCeK5W5/RV5nd7GUUXG0btDqUAa3DzpaRHX3klMAqL73hK4AGD3ItikmxF8vnSaqtsgOCpEePERt9qcUOJJP2aR0scPAf_1TkGSrgr5VF/XLM2i7YhC_3J9fA2Qwa0dbTedY/xGayjimEkuWSWvh7P5FNOum_l7qJPnA31lQq6ixqR0NKhO328rWfijqKHF6WR/5O0MJ4WNuIXk6xBtTOA9mK7CGUgWjaF5mB72PVnDpN8G6ERO39GqO/fCO96/A1mwIPWedF6HklU8jaQ_M5EUzwCsBE3/7FW2hbcD3GCOFCiLvObjn59o6CKoYlmTop/PZw2CLzvARAr5KaLhjIuZRSKTGlmYjvSoSELuvWi/QHUV7SJ0kF_1O3b_3a88cm/z7qD3Rp6MmoQdGPSyu1lXTpoETypgOMywfsr4ycV2LQr5XaE3UrQP/RzobA4rI_I3ceCUaRASmil2rV1TUiyljhdCFt8zmi1o2NyTzSBRNGP0lXU5Qtm6dKKp7lGRC19P2oSSFrxt85vWRNo1mv8odcL/TF7/MN1Ev7gY20MqlRSBrlwg5LZ4_Az7QnBnpbU3LkTC/oVb743VFtXMW4cK/3lw6wfBJZe_8DobxT_6/gCXp6QOs/LuqmrQHMQvTS6jfbqVFnPfLjrQ01Mb_F4lr3md6m87wpc1CYd9hdzgUL/aqz68HMDCxjGauC00Rajq9wGVYcWJ3j6rIaHIPwclftjARXFDg0yH8v/L6qDgIgGwbB3eZfjOXHAMXRFNMMihseZxYkcFAzLtYr94q9XpQeK4bKi9h_rWAMwcEHnS8/MHHlySbgy8azGEA0u9xsY96MRi45Qe74kZ9xlsI1t4Yutx8/gsjIiu7vNsKEyeTwd88BMExjWNcJHOSHRff57pJBMEAtPdbMETYorvUkRyErsqprxX0W45n0RRQ85w/JCOsYaxZOAFfzO0AdLpMCguFwl01fkFOKYrQeXfNn8w0KF4XS0k/fPx02fU7fFjUoXcPH7_9xo755WL8DNIU2ne4b6DpiROe473yUfD8_zSNUI1tpxzVYNA7GvVSYt8UtqHn3/_QwuOc4VeAI6RiAG5O5bcAxzQl96Q35emNwtTT_CYqHORCmyPj6By2hT_SCLf8m_xFxxe3YzvnxDZGq3qf__pq7Tw181/GosBAJy3MotiIxcYDASbY9sV4T2V/KoGHyJ64spdkQbJOHJ216JMSKj8ii5m8gxqJ2ypL81p5hbjWtjbUgSc8M_KTLuc0Owf1R/3vr/dKbQ2pJ4XEfXhnZTBQY7ZrClnVCnd5cMe9ic/aNF0yyOSQVVOecUFkK9IYFVR8VHdVf4/Nfu3nOEskHki1_r3At1HLOMniS6qNTvhS0hfqIuBiQBsd5aB7OdfVpYy1HdIR72gMToBlpHPsE5GrVO0J9/gcyB2xcyZ3UpTom8G3V48LUkk6kcJ6l1SL5Fgzbst0z3pDA4dzBfswbC8dW57_MkswDANNd8atPrOBSU5m2z66dP/mIYQ8iq/DcmBexkARDI47VzYuw5gwy8Lvym2_B2gxBokU9_T/fHCPjlpqjTsY6SgBOz1nlDh_HcSWYAqnyrZxbEO2erVJ4WPKNzjM3KaPXGH/dZryna1E28wxCrMqLCs9aL9oVBlDMjUcEryAyRh7xwN0uWGopdpkd7Du6O9EPjAj37sHkUiVs7WL6JyexoDF_n67MICvQnJ9FK/FVrp1uMZnmr7ijkMW87moNRBkXbVc2EA_hHOHmpbVGqr6WgNtJ7bBk1LrAPT8sKtE75vbe_L9VYqBHJ/njk.WIIj-V23pwC7ZahcIL0XnDPupL7ltwEc779Ofhrk9dt_wIOFsA8XwnCjrYqH2ty.F0XdS\"*;@kDYgfL4dwE/5I@>k|u0D:wGz\"_8=}RJM!Ybbwd}eN=ZB*esF&(iQ%FW]_FSA:3Ze4O*6&tG-Fe**/j^a&S8zIa#6gxL2NmnNMSVGF-Bf3z08tt0ug_UfNshhs4HJh0l1o24gjAN-Uck1OvWkGQSXH0glB7CnOm0gI",
      "attempt_num": 8
    },
    {
      "event_name": "dropped",
      "processed": "2017-10-13T18:56:21Z",
      "attempt_num": 3,
      "url": "G_3c-1HtUkN4`puC&&!u>0OiStFG.ZoRi2=j%fUVa]&re6k{hKqD-8vWE<hw-Bd>12Fb5JC6z>S@@'cWS~w5KtuIwv$8/JDD94CXx1n5yjC_I2lQ66zDj4MXe/4bqlcqqQ7evnQWTYx5roaEYMapyuzb/USpsyalh/HcYc9PmQfF8ND_C7bXnwFQ_fb_BHMXbIV8JN28/NjZdawDJ6kSWxLykSVTHzcISGPBRfs_rt3Uc65Vzj6LDSSMN8WRs70m0tAWs/fkDvjvm_7ZeV08YZeB9j9mS9BcE089Fn5UzDlTJW9vqDF5uipjlIVrNbM7oWE/MIJcjg2vJO20jA24WHrchrEXCvKcxriviSDl3tuyDxqdqRSekpm2aH6yW7_ylXj/nWsex4jm3rKvYw1uLq3Tp7qb9edhj8B_TnwLv1yjHSkgbA5jKI4BTqxugmwVTnFf2OFCFp/ZILLkoKgfwOyIK4reUIkhCjuhkwp/cqGaFAkeCFQXPB6DLYesLZ2M3KPuBsBrs3pr3HRbTtwaOzdKtGc8e0C0VTjrJ3GwljStMPrSuQWh6/vigHRasZ4P9kFv5DPVbHWZzPvtwUw0AMByt44YH678WpbAXXy4I/IVOHmErZTbw1mJ/3vd4uI5rr2zEO_YA9qJZLJT/wmBimbOyaMtmTNYr_FhgfkKMN3_1la7RCK8CIP3p26mbuHbdJV1j/5sTIKibInM5l2BoWdEi49bPqzagsfjKpGVbg0YQ8mjrLhI92/qy0eVYi34kBGVuLzxK2FLC8vwYUrbupjUYE23Mc_6nmHYRK1HF1QmZDZG1hw96I3MPbTZqeJOWGch230qDNxOgnHRNNM52k/3c7FeuRr88RwZGpif/4FaSAbdqkUNvJ9J9qX2tJS9x5vZlgD8k4YHIXDztrnwg2VPquj/uo_2MjbWybIF/NGJM2RFAsKV1S5iOejuTV4p12KlH1p0Dt5EpxCSIl0XoWuvyLYar77f_hzqNdWAyL0FDxGfj4ma4jwqdTTLNyeZEtguYoCHTFfY/HgJkpHx/yO23G7gLhKPvD459ceffHidFh7LipTxNF0GFXhIAPrWfhv7PkPmVofBoFFlo6/rMcHQ82d5VS8i1CCyLtfuT5WH9GqrsOY7xo3lxi7BNL93/PLRdQT3SObRFRERw68V5ZFvIuEQqFOFZQ848rWPLXYDGY658dyjZALf/Ug4EROi_ehNtzPwecer_RGBHxeMnpxrPAFZEL6YXNKzm8hh3HY4Uc4fgkjge5fXsR4CeTSkS66/FOD00deDKmN7XcHEj1LGlAmd4XlV8vFpXg2VazX4OLW8z6vXn5vntNGYO6eBCEKUwupRz9nQSMeZ/Pbmjoopyt6TxQBUfPkHBdgCIhqA1zDV72ARqGlK_ao9KVjvgbB98YeiieIyogkuOa4y0E5iUEdBopzovVgtY88yLijh9ww/tl0R5rI2P2_OxguTbv_wrfEm8jRjISEIqSE9q29RB3n8PeD4hu24rcsaEuTMCqniiLN0a2OtZiKxHnbsNB660Aq3/tEo2SHZBkkIFYXBbDNE7gLfvFz9ZaC_E2oV2quyK1Id5SkNkJBVRRgROWBc_XEOXktc4vRUKxy1MQ526Xilyo8/uI67lHH1Vlr4V3GVmweT4A16KMqzmVzvRDRFLpkBv2iu3Okc1vIqkC/426aOqeUm6SXIx16d8BWVRcmqKqizxDEF3JkLFgX0ab73CZ4GdJ9YaakJO7y4adFGzzIVLcn08UZ/pwDQ9BAuwuMc2yMnKihdvmLKbnAa1ATk9jFXQ9QAEMBHZLbPNvtS3pkpk0s6fyh2ceHa9Myy3fL/oqvPmq_14KzLgPZHaOlyb3tUoQM52fv/I78TqTGyB4WYD_vkm8gYHZcCF0dFIXsiXUbAbwR90Ldk8lsgxSL6rBvjPSlQq7N66NPzUVRYr3zSISupG_66uS4rJszHwmxmmraT3/zfVKxHXFHgxUDRmnwIMfdFKm4sf/qnRRccOLExJYGcZy8u65jo4gHDvO6vnpsdf0YtVWqDBJXa95/Y/qL7EYS73_t6/2xnWra9TTO0OtQNXEQ1XXLSLt6vPw1FTlE2aYCitDgUo7DyxiwuGtvmMKUkYCo/lqXouo2TGXZFF80lrCu1vKdxBgOOerlrsKrOJawGEzL8XzXdxkOMUT8HOzHPNOvDwsxc47mvpVzXEbX5DRaioOlm2U4flTG/6bZfLqJqHNtrKwC5U5NNG6_yNOW5Jg_bLmzUosi86IXxn7i04vRXXn92JmdE70TcdujehT1n15wtiD8ld5A65IV2W1801/wr0XcDIGiUSmxFfCozUCtBTFwln0uJ0cquSDXhj7JQADhYDGyz8WhqcPE7CP9xN93EUBrWczINbA4IsfckY8CZh68/Tak5dEhw8i_3rz/8U39D/iML1G_A8TsnKQ9/_S8o89fFc7Wx/f1nXF8H6OLVbPpp5IZg7UTZ2K0bSe3iBpsmkkJpxY_6zEHTJE3LbIANwF9Ik5Tu0ZJpjck7I07xlHR8mDW9FXclSQC/qJUGL5qByf2SY2Wd24hqKGrahLfqApQuRI8_DtU/Y8kH6DDif5kD6as3sIe6VbKYnU9c1URq/npTlE72m107FXxW9zktdzbBJAxt4udMFzjt2LPcBpqrMKGkrg4BHqKXwhFTspCWyYCjxJ/eFb3fd3BB5kb9D0yl3oOjeWtbJBqsboyzdLisRBn2MCtXO2O8eo4Hkm/2uJDoRjRCyIi2GNRkH0B3EkN6Z3vG40C985bAtM8eqHABzP2QRcKCz4ICOw_Xz249bJk8qM0/m4EeIWnx2ISf9TBU6_0KZ5QJ0VPOCPXxV9jCeK5W5/RV5nd7GUUXG0btDqUAa3DzpaRHX3klMAqL73hK4AGD3ItikmxF8vnSaqtsgOCpEePERt9qcUOJJP2aR0scPAf_1TkGSrgr5VF/XLM2i7YhC_3J9fA2Qwa0dbTedY/xGayjimEkuWSWvh7P5FNOum_l7qJPnA31lQq6ixqR0NKhO328rWfijqKHF6WR/5O0MJ4WNuIXk6xBtTOA9mK7CGUgWjaF5mB72PVnDpN8G6ERO39GqO/fCO96/A1mwIPWedF6HklU8jaQ_M5EUzwCsBE3/7FW2hbcD3GCOFCiLvObjn59o6CKoYlmTop/PZw2CLzvARAr5KaLhjIuZRSKTGlmYjvSoSELuvWi/QHUV7SJ0kF_1O3b_3a88cm/z7qD3Rp6MmoQdGPSyu1lXTpoETypgOMywfsr4ycV2LQr5XaE3UrQP/RzobA4rI_I3ceCUaRASmil2rV1TUiyljhdCFt8zmi1o2NyTzSBRNGP0lXU5Qtm6dKKp7lGRC19P2oSSFrxt85vWRNo1mv8odcL/TF7/MN1Ev7gY20MqlRSBrlwg5LZ4_Az7QnBnpbU3LkTC/oVb743VFtXMW4cK/3lw6wfBJZe_8DobxT_6/gCXp6QOs/LuqmrQHMQvTS6jfbqVFnPfLjrQ01Mb_F4lr3md6m87wpc1CYd9hdzgUL/aqz68HMDCxjGauC00Rajq9wGVYcWJ3j6rIaHIPwclftjARXFDg0yH8v/L6qDgIgGwbB3eZfjOXHAMXRFNMMihseZxYkcFAzLtYr94q9XpQeK4bKi9h_rWAMwcEHnS8/MHHlySbgy8azGEA0u9xsY96MRi45Qe74kZ9xlsI1t4Yutx8/gsjIiu7vNsKEyeTwd88BMExjWNcJHOSHRff57pJBMEAtPdbMETYorvUkRyErsqprxX0W45n0RRQ85w/JCOsYaxZOAFfzO0AdLpMCguFwl01fkFOKYrQeXfNn8w0KF4XS0k/fPx02fU7fFjUoXcPH7_9xo755WL8DNIU2ne4b6DpiROe473yUfD8_zSNUI1tpxzVYNA7GvVSYt8UtqHn3/_QwuOc4VeAI6RiAG5O5bcAxzQl96Q35emNwtTT_CYqHORCmyPj6By2hT_SCLf8m_xFxxe3YzvnxDZGq3qf__pq7Tw181/GosBAJy3MotiIxcYDASbY9sV4T2V/KoGHyJ64spdkQbJOHJ216JMSKj8ii5m8gxqJ2ypL81p5hbjWtjbUgSc8M_KTLuc0Owf1R/3vr/dKbQ2pJ4XEfXhnZTBQY7ZrClnVCnd5cMe9ic/aNF0yyOSQVVOecUFkK9IYFVR8VHdVf4/Nfu3nOEskHki1_r3At1HLOMniS6qNTvhS0hfqIuBiQBsd5aB7OdfVpYy1HdIR72gMToBlpHPsE5GrVO0J9/gcyB2xcyZ3UpTom8G3V48LUkk6kcJ6l1SL5Fgzbst0z3pDA4dzBfswbC8dW57_MkswDANNd8atPrOBSU5m2z66dP/mIYQ8iq/DcmBexkARDI47VzYuw5gwy8Lvym2_B2gxBokU9_T/fHCPjlpqjTsY6SgBOz1nlDh_HcSWYAqnyrZxbEO2erVJ4WPKNzjM3KaPXGH/dZryna1E28wxCrMqLCs9aL9oVBlDMjUcEryAyRh7xwN0uWGopdpkd7Du6O9EPjAj37sHkUiVs7WL6JyexoDF_n67MICvQnJ9FK/FVrp1uMZnmr7ijkMW87moNRBkXbVc2EA_hHOHmpbVGqr6WgNtJ7bBk1LrAPT8sKtE75vbe_L9VYqBHJ/njk.WIIj-V23pwC7ZahcIL0XnDPupL7ltwEc779Ofhrk9dt_wIOFsA8XwnCjrYqH2ty.F0XdS\"*;@kDYgfL4dwE/5I@>k|u0D:wGz\"_8=}RJM!Ybbwd}eN=ZB*esF&(iQ%FW]_FSA:3Ze4O*6&tG-Fe**/j^a&S8zIa#6gxL2NmnNMSVGF-Bf3z08tt0ug_UfNshhs4HJh0l1o24gjAN-Uck1OvWkGQSXH0glB7CnOm0gI",
      "bounce_type": "hard",
      "mx_server": "laborum nisi",
      "http_user_agent": "quis re"
    }
  ],
  "originating_ip": "204.173.18.0",
  "categories": [
    "dolor",
    "pie"
  ],
  "unique_args": "eu",
  "outbound_ip": "181.40.184.87",
  "outbound_ip_type": "dedicated",
  "id": "2mMUdxV2HRfAeDiBTYs2IP"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |
| 404 | - | [`V3Teammates400Error1Error`](../../doc/models/v3-teammates-400-error-1-error.md) |
| 429 | - | [`V3MarketingContactsSearch500Error1Error`](../../doc/models/v3-marketing-contacts-search-500-error-1-error.md) |

