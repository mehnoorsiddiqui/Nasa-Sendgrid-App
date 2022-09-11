# Natural Color

```ts
const naturalColorController = new NaturalColorController(client);
```

## Class Name

`NaturalColorController`

## Methods

* [Get All Available Dates](../../doc/controllers/natural-color.md#get-all-available-dates)
* [Get Image List on a Date](../../doc/controllers/natural-color.md#get-image-list-on-a-date)
* [Get Single Image in PNG](../../doc/controllers/natural-color.md#get-single-image-in-png)
* [Get Combined Images on a Date](../../doc/controllers/natural-color.md#get-combined-images-on-a-date)
* [Get Solar Eclipse Days](../../doc/controllers/natural-color.md#get-solar-eclipse-days)
* [Get Lunar Transit Days](../../doc/controllers/natural-color.md#get-lunar-transit-days)


# Get All Available Dates

This endpoint returns all the dates when images are available. The first available date is 2015-06-13, while some dates are unavailable which can be checked from this endpoint.

```ts
async getAllAvailableDates(
  requestOptions?: RequestOptions
): Promise<ApiResponse<Dates[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Dates[]`](../../doc/models/dates.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await naturalColorController.getAllAvailableDates();
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
[
  {
    "date": "2021-11-29"
  },
  {
    "date": "2021-11-28"
  },
  {
    "date": "2021-11-27"
  },
  {
    "date": "2021-11-26"
  },
  {
    "date": "2021-11-25"
  },
  {
    "date": "2021-11-24"
  },
  {
    "date": "2021-11-23"
  },
  {
    "date": "2015-09-04"
  },
  {
    "date": "2015-09-03"
  },
  {
    "date": "2015-09-02"
  },
  {
    "date": "2015-09-01"
  },
  {
    "date": "2015-08-31"
  },
  {
    "date": "2015-08-27"
  },
  {
    "date": "2015-08-26"
  },
  {
    "date": "2015-08-25"
  },
  {
    "date": "2015-08-24"
  },
  {
    "date": "2015-08-23"
  },
  {
    "date": "2015-08-20"
  },
  {
    "date": "2015-08-18"
  },
  {
    "date": "2015-08-17"
  },
  {
    "date": "2015-08-12"
  },
  {
    "date": "2015-08-11"
  },
  {
    "date": "2015-08-10"
  },
  {
    "date": "2015-08-09"
  },
  {
    "date": "2015-08-08"
  },
  {
    "date": "2015-08-07"
  },
  {
    "date": "2015-08-06"
  },
  {
    "date": "2015-08-04"
  },
  {
    "date": "2015-08-03"
  },
  {
    "date": "2015-08-02"
  },
  {
    "date": "2015-07-29"
  },
  {
    "date": "2015-07-28"
  },
  {
    "date": "2015-07-26"
  },
  {
    "date": "2015-07-25"
  },
  {
    "date": "2015-07-24"
  },
  {
    "date": "2015-07-23"
  },
  {
    "date": "2015-07-22"
  },
  {
    "date": "2015-07-21"
  },
  {
    "date": "2015-07-18"
  },
  {
    "date": "2015-07-17"
  },
  {
    "date": "2015-07-14"
  },
  {
    "date": "2015-07-12"
  },
  {
    "date": "2015-07-11"
  },
  {
    "date": "2015-07-07"
  },
  {
    "date": "2015-07-06"
  },
  {
    "date": "2015-07-05"
  },
  {
    "date": "2015-07-04"
  },
  {
    "date": "2015-06-30"
  },
  {
    "date": "2015-06-27"
  },
  {
    "date": "2015-06-22"
  },
  {
    "date": "2015-06-21"
  },
  {
    "date": "2015-06-20"
  },
  {
    "date": "2015-06-18"
  },
  {
    "date": "2015-06-17"
  },
  {
    "date": "2015-06-16"
  },
  {
    "date": "2015-06-13"
  }
]
```


# Get Image List on a Date

This endpoint gives the list of images available on a particular date. The following information is available for every image in the collection:

image [name]
date
caption
centroid_coordinates
dscovr_j2000_position
lunar_j2000_position
sun_j2000_position
attitude_quaternions
coords
{
lat (Latitude)
lon (Longitude)
centroid_coordinates (Geographical coordinates that the satellite is looking at)
dscovr_j2000_position (Position of the satellite in space)
lunar_j2000_position   (Position of the moon in space)
sun_j2000_position (Position of the sun in space)
attitude_quaternions   (Satellite attitude)
}

```ts
async getImageListOnADate(
  date: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ImagesOnADate[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ImagesOnADate[]`](../../doc/models/images-on-a-date.md)

## Example Usage

```ts
const date = '2015-10-31';
try {
  const { result, ...httpResponse } = await naturalColorController.getImageListOnADate(date);
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
[
  {
    "identifier": "20151031003633",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031003633",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.222168,
      "lon": 159.748535
    },
    "dscovr_j2000_position": {
      "x": -1283061.502946,
      "y": -669893.465826,
      "z": -130240.863464
    },
    "lunar_j2000_position": {
      "x": 33466.895832,
      "y": 354549.449169,
      "z": 116876.96183
    },
    "sun_j2000_position": {
      "x": -118557507.999987,
      "y": -82106194.000015,
      "z": -35593694.71975
    },
    "attitude_quaternions": {
      "q0": -0.308502,
      "q1": -0.119342,
      "q2": 0.210556,
      "q3": 0.919914
    },
    "date": "2015-10-31 00:31:45",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.222168,
        "lon": 159.748535
      },
      "dscovr_j2000_position": {
        "x": -1283061.502946,
        "y": -669893.465826,
        "z": -130240.863464
      },
      "lunar_j2000_position": {
        "x": 33466.895832,
        "y": 354549.449169,
        "z": 116876.96183
      },
      "sun_j2000_position": {
        "x": -118557507.999987,
        "y": -82106194.000015,
        "z": -35593694.71975
      },
      "attitude_quaternions": {
        "q0": -0.308502,
        "q1": -0.119342,
        "q2": 0.210556,
        "q3": 0.919914
      }
    }
  },
  {
    "identifier": "20151031022436",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031022436",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.229492,
      "lon": 132.736816
    },
    "dscovr_j2000_position": {
      "x": -1281877.008333,
      "y": -671639.753251,
      "z": -130780.244792
    },
    "lunar_j2000_position": {
      "x": 26748.269687,
      "y": 355502.881196,
      "z": 117189.13019
    },
    "sun_j2000_position": {
      "x": -118438015.729858,
      "y": -82246846.816502,
      "z": -35654673.80001
    },
    "attitude_quaternions": {
      "q0": -0.307971,
      "q1": -0.119622,
      "q2": 0.2112,
      "q3": 0.91991
    },
    "date": "2015-10-31 02:19:47",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.229492,
        "lon": 132.736816
      },
      "dscovr_j2000_position": {
        "x": -1281877.008333,
        "y": -671639.753251,
        "z": -130780.244792
      },
      "lunar_j2000_position": {
        "x": 26748.269687,
        "y": 355502.881196,
        "z": 117189.13019
      },
      "sun_j2000_position": {
        "x": -118438015.729858,
        "y": -82246846.816502,
        "z": -35654673.80001
      },
      "attitude_quaternions": {
        "q0": -0.307971,
        "q1": -0.119622,
        "q2": 0.2112,
        "q3": 0.91991
      }
    }
  },
  {
    "identifier": "20151031041238",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031041238",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.20752,
      "lon": 105.732422
    },
    "dscovr_j2000_position": {
      "x": -1280689.083333,
      "y": -673386.927084,
      "z": -131320.992007
    },
    "lunar_j2000_position": {
      "x": 20022.016969,
      "y": 356342.323248,
      "z": 117463.793731
    },
    "sun_j2000_position": {
      "x": -118318297.426189,
      "y": -82387383.630852,
      "z": -35715598.000036
    },
    "attitude_quaternions": {
      "q0": -0.307449,
      "q1": -0.119949,
      "q2": 0.211809,
      "q3": 0.919899
    },
    "date": "2015-10-31 04:07:50",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.20752,
        "lon": 105.732422
      },
      "dscovr_j2000_position": {
        "x": -1280689.083333,
        "y": -673386.927084,
        "z": -131320.992007
      },
      "lunar_j2000_position": {
        "x": 20022.016969,
        "y": 356342.323248,
        "z": 117463.793731
      },
      "sun_j2000_position": {
        "x": -118318297.426189,
        "y": -82387383.630852,
        "z": -35715598.000036
      },
      "attitude_quaternions": {
        "q0": -0.307449,
        "q1": -0.119949,
        "q2": 0.211809,
        "q3": 0.919899
      }
    }
  },
  {
    "identifier": "20151031060041",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031060041",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.266113,
      "lon": 78.757324
    },
    "dscovr_j2000_position": {
      "x": -1279497.913991,
      "y": -675134.673958,
      "z": -131863.023014
    },
    "lunar_j2000_position": {
      "x": 13290.30861,
      "y": 357067.953655,
      "z": 117701.005561
    },
    "sun_j2000_position": {
      "x": -118198377.367924,
      "y": -82527784.847903,
      "z": -35776466.382695
    },
    "attitude_quaternions": {
      "q0": -0.306901,
      "q1": -0.120242,
      "q2": 0.212515,
      "q3": 0.919888
    },
    "date": "2015-10-31 05:55:53",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.266113,
        "lon": 78.757324
      },
      "dscovr_j2000_position": {
        "x": -1279497.913991,
        "y": -675134.673958,
        "z": -131863.023014
      },
      "lunar_j2000_position": {
        "x": 13290.30861,
        "y": 357067.953655,
        "z": 117701.005561
      },
      "sun_j2000_position": {
        "x": -118198377.367924,
        "y": -82527784.847903,
        "z": -35776466.382695
      },
      "attitude_quaternions": {
        "q0": -0.306901,
        "q1": -0.120242,
        "q2": 0.212515,
        "q3": 0.919888
      }
    }
  },
  {
    "identifier": "20151031074844",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031074844",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.273438,
      "lon": 51.70166
    },
    "dscovr_j2000_position": {
      "x": -1278303.545623,
      "y": -676882.776041,
      "z": -132406.2518
    },
    "lunar_j2000_position": {
      "x": 6555.306072,
      "y": 357679.881125,
      "z": 117900.822392
    },
    "sun_j2000_position": {
      "x": -118078284.945818,
      "y": -82668019.720696,
      "z": -35837260.987191
    },
    "attitude_quaternions": {
      "q0": -0.30639,
      "q1": -0.12058,
      "q2": 0.21321,
      "q3": 0.91985
    },
    "date": "2015-10-31 07:43:55",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.273438,
        "lon": 51.70166
      },
      "dscovr_j2000_position": {
        "x": -1278303.545623,
        "y": -676882.776041,
        "z": -132406.2518
      },
      "lunar_j2000_position": {
        "x": 6555.306072,
        "y": 357679.881125,
        "z": 117900.822392
      },
      "sun_j2000_position": {
        "x": -118078284.945818,
        "y": -82668019.720696,
        "z": -35837260.987191
      },
      "attitude_quaternions": {
        "q0": -0.30639,
        "q1": -0.12058,
        "q2": 0.21321,
        "q3": 0.91985
      }
    }
  },
  {
    "identifier": "20151031093647",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031093647",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.310059,
      "lon": 24.748535
    },
    "dscovr_j2000_position": {
      "x": -1277105.493875,
      "y": -678631.647917,
      "z": -132950.831771
    },
    "lunar_j2000_position": {
      "x": -179.807049,
      "y": 358178.31385,
      "z": 118063.283994
    },
    "sun_j2000_position": {
      "x": -117957965.190797,
      "y": -82808140.800018,
      "z": -35898005.273407
    },
    "attitude_quaternions": {
      "q0": -0.305838,
      "q1": -0.120879,
      "q2": 0.213832,
      "q3": 0.919849
    },
    "date": "2015-10-31 09:31:58",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.310059,
        "lon": 24.748535
      },
      "dscovr_j2000_position": {
        "x": -1277105.493875,
        "y": -678631.647917,
        "z": -132950.831771
      },
      "lunar_j2000_position": {
        "x": -179.807049,
        "y": 358178.31385,
        "z": 118063.283994
      },
      "sun_j2000_position": {
        "x": -117957965.190797,
        "y": -82808140.800018,
        "z": -35898005.273407
      },
      "attitude_quaternions": {
        "q0": -0.305838,
        "q1": -0.120879,
        "q2": 0.213832,
        "q3": 0.919849
      }
    }
  },
  {
    "identifier": "20151031112450",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031112450",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.280762,
      "lon": -2.29248
    },
    "dscovr_j2000_position": {
      "x": -1275904.189584,
      "y": -680381.14479,
      "z": -133496.693752
    },
    "lunar_j2000_position": {
      "x": -6914.979984,
      "y": 358563.643076,
      "z": 118188.536049
    },
    "sun_j2000_position": {
      "x": -117837445.397032,
      "y": -82948125.600978,
      "z": -35958689.332738
    },
    "attitude_quaternions": {
      "q0": -0.305279,
      "q1": -0.12118,
      "q2": 0.21454,
      "q3": 0.919828
    },
    "date": "2015-10-31 11:20:01",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.280762,
        "lon": -2.29248
      },
      "dscovr_j2000_position": {
        "x": -1275904.189584,
        "y": -680381.14479,
        "z": -133496.693752
      },
      "lunar_j2000_position": {
        "x": -6914.979984,
        "y": 358563.643076,
        "z": 118188.536049
      },
      "sun_j2000_position": {
        "x": -117837445.397032,
        "y": -82948125.600978,
        "z": -35958689.332738
      },
      "attitude_quaternions": {
        "q0": -0.305279,
        "q1": -0.12118,
        "q2": 0.21454,
        "q3": 0.919828
      }
    }
  },
  {
    "identifier": "20151031131253",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031131253",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.317383,
      "lon": -29.311523
    },
    "dscovr_j2000_position": {
      "x": -1274699.50339,
      "y": -682131.205978,
      "z": -134043.821842
    },
    "lunar_j2000_position": {
      "x": -13647.06073,
      "y": 358836.051956,
      "z": 118276.631707
    },
    "sun_j2000_position": {
      "x": -117716725.566495,
      "y": -83087966.081665,
      "z": -36019313.333317
    },
    "attitude_quaternions": {
      "q0": -0.30476,
      "q1": -0.12147,
      "q2": 0.21515,
      "q3": 0.91983
    },
    "date": "2015-10-31 13:08:04",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.317383,
        "lon": -29.311523
      },
      "dscovr_j2000_position": {
        "x": -1274699.50339,
        "y": -682131.205978,
        "z": -134043.821842
      },
      "lunar_j2000_position": {
        "x": -13647.06073,
        "y": 358836.051956,
        "z": 118276.631707
      },
      "sun_j2000_position": {
        "x": -117716725.566495,
        "y": -83087966.081665,
        "z": -36019313.333317
      },
      "attitude_quaternions": {
        "q0": -0.30476,
        "q1": -0.12147,
        "q2": 0.21515,
        "q3": 0.91983
      }
    }
  },
  {
    "identifier": "20151031164859",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031164859",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.412598,
      "lon": -83.283691
    },
    "dscovr_j2000_position": {
      "x": -1272279.625001,
      "y": -685632.830433,
      "z": -135141.880208
    },
    "lunar_j2000_position": {
      "x": -27093.579864,
      "y": 359043.533047,
      "z": 118341.840748
    },
    "sun_j2000_position": {
      "x": -117474676.872078,
      "y": -83367223.628413,
      "z": -36140377.333303
    },
    "attitude_quaternions": {
      "q0": -0.303654,
      "q1": -0.122101,
      "q2": 0.216495,
      "q3": 0.919789
    },
    "date": "2015-10-31 16:44:10",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.412598,
        "lon": -83.283691
      },
      "dscovr_j2000_position": {
        "x": -1272279.625001,
        "y": -685632.830433,
        "z": -135141.880208
      },
      "lunar_j2000_position": {
        "x": -27093.579864,
        "y": 359043.533047,
        "z": 118341.840748
      },
      "sun_j2000_position": {
        "x": -117474676.872078,
        "y": -83367223.628413,
        "z": -36140377.333303
      },
      "attitude_quaternions": {
        "q0": -0.303654,
        "q1": -0.122101,
        "q2": 0.216495,
        "q3": 0.919789
      }
    }
  },
  {
    "identifier": "20151031183701",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031183701",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.383301,
      "lon": -110.258789
    },
    "dscovr_j2000_position": {
      "x": -1271064.4375,
      "y": -687384.443644,
      "z": -135692.809116
    },
    "lunar_j2000_position": {
      "x": -33803.879518,
      "y": 358979.187727,
      "z": 118319.125286
    },
    "sun_j2000_position": {
      "x": -117353356.950018,
      "y": -83506647.596795,
      "z": -36200817.333324
    },
    "attitude_quaternions": {
      "q0": -0.30309,
      "q1": -0.12242,
      "q2": 0.21729,
      "q3": 0.91975
    },
    "date": "2015-10-31 18:32:13",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.383301,
        "lon": -110.258789
      },
      "dscovr_j2000_position": {
        "x": -1271064.4375,
        "y": -687384.443644,
        "z": -135692.809116
      },
      "lunar_j2000_position": {
        "x": -33803.879518,
        "y": 358979.187727,
        "z": 118319.125286
      },
      "sun_j2000_position": {
        "x": -117353356.950018,
        "y": -83506647.596795,
        "z": -36200817.333324
      },
      "attitude_quaternions": {
        "q0": -0.30309,
        "q1": -0.12242,
        "q2": 0.21729,
        "q3": 0.91975
      }
    }
  },
  {
    "identifier": "20151031202505",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031202505",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.427246,
      "lon": -137.285156
    },
    "dscovr_j2000_position": {
      "x": -1269845.847403,
      "y": -689136.569511,
      "z": -136245.003836
    },
    "lunar_j2000_position": {
      "x": -40502.811073,
      "y": 358803.507638,
      "z": 118259.778638
    },
    "sun_j2000_position": {
      "x": -117231836.969709,
      "y": -83645919.466536,
      "z": -36261196.448475
    },
    "attitude_quaternions": {
      "q0": -0.302544,
      "q1": -0.122702,
      "q2": 0.217828,
      "q3": 0.91976
    },
    "date": "2015-10-31 20:20:16",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.427246,
        "lon": -137.285156
      },
      "dscovr_j2000_position": {
        "x": -1269845.847403,
        "y": -689136.569511,
        "z": -136245.003836
      },
      "lunar_j2000_position": {
        "x": -40502.811073,
        "y": 358803.507638,
        "z": 118259.778638
      },
      "sun_j2000_position": {
        "x": -117231836.969709,
        "y": -83645919.466536,
        "z": -36261196.448475
      },
      "attitude_quaternions": {
        "q0": -0.302544,
        "q1": -0.122702,
        "q2": 0.217828,
        "q3": 0.91976
      }
    }
  },
  {
    "identifier": "20151031221308",
    "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
    "image": "epic_1b_20151031221308",
    "version": "03",
    "centroid_coordinates": {
      "lat": -5.412598,
      "lon": -164.274902
    },
    "dscovr_j2000_position": {
      "x": -1268623.557569,
      "y": -690889.141203,
      "z": -136798.451041
    },
    "lunar_j2000_position": {
      "x": -47188.349357,
      "y": 358516.852648,
      "z": 118163.91538
    },
    "sun_j2000_position": {
      "x": -117110114.800078,
      "y": -83785061.649627,
      "z": -36321513.174041
    },
    "attitude_quaternions": {
      "q0": -0.302,
      "q1": -0.123,
      "q2": 0.21848,
      "q3": 0.91975
    },
    "date": "2015-10-31 22:08:19",
    "coords": {
      "centroid_coordinates": {
        "lat": -5.412598,
        "lon": -164.274902
      },
      "dscovr_j2000_position": {
        "x": -1268623.557569,
        "y": -690889.141203,
        "z": -136798.451041
      },
      "lunar_j2000_position": {
        "x": -47188.349357,
        "y": 358516.852648,
        "z": 118163.91538
      },
      "sun_j2000_position": {
        "x": -117110114.800078,
        "y": -83785061.649627,
        "z": -36321513.174041
      },
      "attitude_quaternions": {
        "q0": -0.302,
        "q1": -0.123,
        "q2": 0.21848,
        "q3": 0.91975
      }
    }
  }
]
```


# Get Single Image in PNG

All of the imagery is stored in an archival directory subdivided by collection, year, month, day, and image type. There are three separate image types available: full resolution PNG, half-resolution JPG, and thumbnails.

```ts
async getSingleImageInPNG(
  year: string,
  month: string,
  day: string,
  imageQuality: ImageQualityEnum,
  imageTitle: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `year` | `string` | Template, Required | - |
| `month` | `string` | Template, Required | - |
| `day` | `string` | Template, Required | - |
| `imageQuality` | [`ImageQualityEnum`](../../doc/models/image-quality-enum.md) | Template, Required | There are three separate image types available: full resolution PNG, half-resolution JPG, and thumbnails |
| `imageTitle` | `string` | Template, Required | Image Title can be obtained from "Image List On A Date" endpoint. Please append .png (for PNG) or .jpg (for JPG and Thumbnails). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const year = '2015';
const month = '10';
const day = '31';
const imageQuality = 'png';
const imageTitle = 'epic_1b_20151031074844.png';
try {
  const { result, ...httpResponse } = await naturalColorController.getSingleImageInPNG(year, month, day, imageQuality, imageTitle);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Combined Images on a Date

This endpoint provides combined images of a single day. Please note that DSCOVR started operation in 2015. Some dates are unavailable while DSCOVR went to maintenance etc. The endpoint "All Available Dates" can help getting a list of all the available dates.

```ts
async getCombinedImagesOnADate(
  date: string,
  gridColumns: number,
  imageQuality: ImageQualityEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Template, Required | All available images on this date would be displayed. Date pattern needs to be in yyyy-mm-dd format.<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `10` |
| `gridColumns` | `number` | Template, Required | Number of earth positions displayed per row<br>**Constraints**: `>= 1`, `<= 5`, *Total Digits*: `1` |
| `imageQuality` | [`ImageQualityEnum`](../../doc/models/image-quality-enum.md) | Template, Required | Quality of the Image being displayed. Thumbnail is of the lowest quality, but is the quickest to load. The Best quality images in PNG could take up to a minute to load |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const date = '2016-10-31';
const gridColumns = 2;
const imageQuality = 'jpg';
try {
  const { result, ...httpResponse } = await naturalColorController.getCombinedImagesOnADate(date, gridColumns, imageQuality);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Solar Eclipse Days

DSCOVR stays at the Lagrange point, L1, which means it can see the sun-lit part of the Earth 24/7. Therefore, in case of a solar eclipse, it captures the shadow of the moon passing through different parts of our planet.

```ts
async getSolarEclipseDays(
  date: SolarEclipseDatesEnum,
  gridColumns: number,
  imageQuality: ImageQualityEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | [`SolarEclipseDatesEnum`](../../doc/models/solar-eclipse-dates-enum.md) | Template, Required | All available images on this date would be displayed. Please note that DSCOVR satellite started operation in 2015. Some dates are unavailable while DSCOVR went to maintenance etc. |
| `gridColumns` | `number` | Template, Required | Number of earth positions to be displayed per row. More columns means a wider picture<br>**Constraints**: `>= 1`, `<= 5`, *Total Digits*: `1` |
| `imageQuality` | [`ImageQualityEnum`](../../doc/models/image-quality-enum.md) | Template, Required | Quality of the Image being displayed. Thumbnail is of the lowest quality, but is the quickest to load. The Best quality images in PNG could take up to a minute to load |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const date = '2017-08-21';
const gridColumns = 2;
const imageQuality = 'jpg';
try {
  const { result, ...httpResponse } = await naturalColorController.getSolarEclipseDays(date, gridColumns, imageQuality);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Lunar Transit Days

At a million miles away, we go well past the moon, and so get a chance to see the rear or dark side of the moon. Since the moon is phase-locked with Earth, we never see this side of the moon from Earth. However, thanks to DSCOVR, you can now see this spectacular view of the moon when it transits between the telescope and Earth. Just select the date and hit "Try It Out" button

```ts
async getLunarTransitDays(
  date: LunarTransitDatesEnum,
  gridColumns: number,
  imageQuality: ImageQualityEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | [`LunarTransitDatesEnum`](../../doc/models/lunar-transit-dates-enum.md) | Template, Required | All available images on this date would be displayed. Please note that DSCOVR satellite started operation in 2015. Some dates are unavailable while DSCOVR went to maintenance etc. |
| `gridColumns` | `number` | Template, Required | Number of earth positions to be displayed per row. More columns means a wider picture<br>**Constraints**: `>= 1`, `<= 5`, *Total Digits*: `1` |
| `imageQuality` | [`ImageQualityEnum`](../../doc/models/image-quality-enum.md) | Template, Required | Quality of the Image being displayed. Thumbnail is of the lowest quality, but is the quickest to load. The Best quality images in PNG could take up to a minute to load |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const date = '2021-02-11';
const gridColumns = 2;
const imageQuality = 'jpg';
try {
  const { result, ...httpResponse } = await naturalColorController.getLunarTransitDays(date, gridColumns, imageQuality);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

