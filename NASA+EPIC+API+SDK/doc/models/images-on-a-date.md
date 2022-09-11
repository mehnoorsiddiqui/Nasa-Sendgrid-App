
# Images on a Date

## Structure

`ImagesOnADate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | `string` | Required | - |
| `caption` | `string` | Required | - |
| `image` | `string` | Required | - |
| `version` | `string` | Required | - |
| `centroidCoordinates` | [`CentroidCoordinates`](../../doc/models/centroid-coordinates.md) | Required | - |
| `dscovrJ2000Position` | [`DscovrJ2000Position`](../../doc/models/dscovr-j2000-position.md) | Required | - |
| `lunarJ2000Position` | [`LunarJ2000Position`](../../doc/models/lunar-j2000-position.md) | Required | - |
| `sunJ2000Position` | [`SunJ2000Position`](../../doc/models/sun-j2000-position.md) | Required | - |
| `attitudeQuaternions` | [`AttitudeQuaternions`](../../doc/models/attitude-quaternions.md) | Required | - |
| `date` | `string` | Required | - |
| `coords` | [`Coords`](../../doc/models/coords.md) | Required | - |

## Example (as JSON)

```json
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
}
```

