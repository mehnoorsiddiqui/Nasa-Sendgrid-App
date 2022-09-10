
# Message

## Structure

`Message`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromEmail` | `string` | Required | **Constraints**: *Pattern*: `\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b` |
| `msgId` | `string` | Required | **Constraints**: *Minimum Length*: `5`, *Maximum Length*: `50`, *Pattern*: `^[A-Za-z0-9]+` |
| `subject` | `string` | Required | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `255` |
| `toEmail` | `string` | Required | **Constraints**: *Pattern*: `\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b` |
| `status` | [`Status11Enum`](../../doc/models/status-11-enum.md) | Required | - |
| `templateId` | `string` | Required | - |
| `asmGroupId` | `number` | Required | **Constraints**: `>= 1` |
| `teammate` | `string` | Required | Teammate's username<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `64`, *Pattern*: `^$\|^[A-Za-z0-9]+` |
| `apiKeyId` | `string` | Required | **Constraints**: *Minimum Length*: `3`, *Maximum Length*: `50`, *Pattern*: `^[A-Za-z0-9]+` |
| `events` | [`Event[]`](../../doc/models/event.md) | Required | List of events related to email message |
| `originatingIp` | `string` | Required | This is the IP of the user who sent the message. |
| `categories` | `string[]` | Required | Categories users associated to the message |
| `uniqueArgs` | `string` | Required | JSON hash of arbitrary key-value pairs |
| `outboundIp` | `string` | Required | IP used to send to the remote MTA. Used by UI to display IP in detailed view |
| `outboundIpType` | [`OutboundIpTypeEnum`](../../doc/models/outbound-ip-type-enum.md) | Required | - |

## Example (as JSON)

```json
{
  "from_email": "test@test.com",
  "msg_id": "in aliquip id aliqua",
  "subject": "est incididunt adipisicing pariatur",
  "to_email": "send@test.com",
  "status": "not_delivered",
  "template_id": "123e4567-e89b-12d3-a456-426655440000",
  "asm_group_id": 11376349,
  "teammate": "",
  "api_key_id": "sdfsdfsdf123",
  "originating_ip": "2.3.4.5",
  "events": [
    {
      "event_name": "bounced",
      "processed": "2017-10-13T18:56:21Z",
      "url": "http://3LX,MU}N=B8'd,K}>bEma{l~!ad%peIF}y>qHfLPWQ$l9b\\!6.1H?$Z9H\"il-_gZD>/JPYsGqH4x4_3v090TCtnFalXGFiAdooDxgrDAYNXShUywSxwYr8gKeyc/4sal4VJ3IxEWsG74V5MYQ0mz27jhy7n5DHsUtApQ6zXHS13uO5vYBlJHpJRfuT6/F5nIpkHre2w3eTtN7M6pg9V5stjnnsavKkzQxyTv15CMSDLFwR_BTZwofhWpyBU7B9ypYL79vT97N3LDZyoaM/fNsOLPIqfGBer_Mx9_StergbQYANyOmOSjR6pZof01ky/ZcNDhpu3CkSl4MTtQ3NMCX780pOKQ5SYIPigyvz9IC9WtrCNcOkTxdOPdY0_4MJU4EuTTPmGvO/14KaJCDjIjgrbIqpzuUEL5mET0t2VeVlwvtnOnlHaBE8sic20ze2E0Xt3ETqXyzVJRjLDKh/LWkW8OVp_xkLBCCW7LQngRukKcOiWjMXeCEhYI9HoZ0RsMEWZC8KzRaHc4OI0uXPD4M9pav1LGrI/_0t_RnBnfnqGKsBJr0kdQi/Y6QN_aeawIqX5hDNIU3MF/wWKVWLS0ZFbDfK6KVv5oAid83EpwKoazAMA8MTfEXvHQLO7k7XYWX1Il3eGXL6/wCA96I1SOabzJkZHo2HsFpIC/VBk52Lnpp0xtDH/OCdlQ5e4PpxXQeklp70LPOndr7QKSYEQNUc48n36ixvTjhgpgO8wHsFFYqGcuBMHg9oaCARppQomiQDWYuVPVDynJHdsM1_gWl4/NSs8Y9PL7DrQXOu0UiFRRE0TUsvgqyUgJzlGjUnRziyYeROO75D0K_3aTtbGbCmhaxecos40a1w0PDCNkFp1W/iHwY7922drhsoM6ShwqqwGpAh5HLuU6Q5gqyckeai6YN7HCh9DdHPhhJcatgtMHZDKfQUBVt9ecUlDgiCFF_OnRX/GpzttcsL8E2FoXL9_eAWvSqjodROqx7MZCA/ORdnR/IssPCYP1kTHTIL5mZxv4UGEpyNjUzt4GdSJJTm0nztltWDYX8_Ezl2JvpLVnGVTJxobb4yQIJhe3n64khbOFyFLKHWEniIolm/AxpZQYmseWlVqrIz3YXU59XaSbTTrdCHNhvwF1ogXiiggN6TZ2B3QY_mBEtAp/SD0ONPVqEUkTNAFWTgnnlv6ZIMdMbTw5uZwtFRlB7qDvQouml9kujGmRu6k7zZMTOwWowRNtpboLUcL2NzkVgK6N1Zi2vq/Nt4NJvM5_l1dpIIbwJv_CIcZQZOqPtRWULa2iVxfmJJQaqgLQPwSHQH1zuRJMhraEsPjqVQRC0pZpSt/24VBDN8y31Ye/y_ekWxMdZCvr978C/WrdcTi29kxjJLyT9BII7BsgT5vLuI2l7ntqRAhAUWMs/h9JR0i8RbX5OfB46q41/TfmSdgi97bCR2HfgflyypXwKhRfKYU2MVpu2Dd90WQUlm7hZV8dSfGusuMj/nPMpRVWcbnvlAdsehJCPbLv6n4qdLSPeoMBo32acAGgu1BwBG8JsBgbH43yYi5X7UdGRWKqm_ZbqaDEKH3ncU/uA8EOJb41VfGho4LUeOi1IeYwVAhFEyO6YbteYZecEubrNFZrWWjZUqhzouzY95TeWU8E4StCXVPKlYPiFiwUSX20kG0lVtDbAy/7u4f4x0cYlFOvI1UN1qoOExmNxnxzQQFeM5exWfW2JrRXq5e0UdAJr4q2o9Y_0WaGfhL/nP6Ei06YajDKr11dK5H0LX/9CGTC37HFZeopyopzP_7fvGFkqIRoGTS48pLaIFz3gwpQNlWXUFCsd/PnRlsqJ3SBQSgp_AQe2cP6iBNy2bJI8lkxwY5YVDDdjxusuCcafdjfs2aUa/4tr_iMnNBnd27GxjQI28_JGJlfbOaajVJOxuPMT4ELpYCfPiFjdSbJyE0/gCwtj0rgDKSLWJnOPJ5TAJ935gCqeIsBhOhfcZX413GdilBZRRYEjCVKfOuWzHZ3GW/8yjyk5e_WMNv5F6xggl07w90DBwpx/Q/iWfncqMuSfoeFeqHQkDL9F5W19j1cGuAcyfIYMAXztHXpgTKh9vZcsLYC7LcgKr4FQj3JjEvtnDG2PjcMjGF/MnbCRCz22Ho410_vE9M1Hpq0wdk_i5DbZKNoSwlPgey9URkpuX146TcDdsx_VWDenCepY5HwMr9CPOY9hzUs/c5AWeUMXk/gvsI81Jkv5rHpEnNBUZXYzfqkwQfffhmrc/StLCtzRRlja8dpsEWdkzoKR9Kdxq1qAs5f0sdrGjVRLTT_s1Q2P59zhA/QmS4bubi64cYot3gSIgdNnkjA2GjCp1ETVa548_U9B6boTKDVmaKJlVIDvqL84RC3WI7Er/8opi2lZ48W83Ur47BRh38oOnI0agrCyZz8bp1w_gfVRlSO8PS0i/l_/qxq5xpLbhPkdxVoyZVsNAZchfnmkIHyIk5IK6EUDXdMR21y6OvKW50ZbooAtk9ymynBj4dAYMsd25RV7FE1I1vRTsiDw52/.E5WC0Ymo2zn.qelSbhzr-4laArYiWP.dwJB6qm_6rs0Rm5UXYaYtUNbh76_jJp_X1xQUCDSgbr2KOkDU0\"Q/-4dV\"Yk3QGg[(O86=Pf\"e17K4'r{)kicofHSXcMmP@>VF^`~4j4F*L/1]tD+Lw!WI!@]*OZm6C`M$u96}*O<U;_cZ84k.|nIqpAaeiroItOenDBL",
      "bounce_type": "hard",
      "http_user_agent": "in tempor ex dolore est",
      "mx_server": "quis proident",
      "server_response": "some error message"
    }
  ],
  "categories": [
    "hi",
    "bye"
  ],
  "unique_args": "{'key': 'value'}",
  "outbound_ip": "1.2.3.4",
  "outbound_ip_type": "dedicated"
}
```

