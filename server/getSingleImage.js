const { ApiError, Client, NaturalColorController, ImageQualityEnum } = require('nasa-epic-apilib');

const client = new Client({
  timeout: 0,
})

const naturalColorController = new NaturalColorController(client);
const year = '2015';
const month = '10';
const day = '31';
const imageTitle = 'epic_1b_20151031074844.jpg';
const imageQuality = ImageQualityEnum.Medium;

const getSingleImage = async () => {
  try {
    const { result, ...httpResponse } = await naturalColorController.getSingleImageInPNG(year, month, day, imageQuality, imageTitle);
    function streamToString(stream) {
      const chunks = [];
      return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
      })
    }

    const base64Img = await streamToString(result);
    return base64Img;
  } catch (error) {
    console.log(error)
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
}
module.exports = getSingleImage;
// getSingleImage();
// const { ApiError, Client, NaturalColorController } = require('nasa-epic-apilib');

// const client = new Client({
//   timeout: 0,
// })
// const naturalColorController = new NaturalColorController(client);
// const date = '2016-10-31';
// const gridColumns = 1;
// const imageQuality = 'thumbs';


// const getCombinedImages = async () => {
//   try {
//     const { result, ...httpResponse } = await naturalColorController.getCombinedImagesOnADate(date, gridColumns, imageQuality);

//     function streamToString(stream) {
//       const chunks = [];
//       return new Promise((resolve, reject) => {
//         stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
//         stream.on('error', (err) => reject(err));
//         stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
//       })
//     }

//     const result2 = await streamToString(result);
//     console.log(result2);
//     return result2;
//     // result.on('readable', function() {
//     //   var string = result.closed()
//     //   console.log(string)
//     //   // send through websocket
//     // })
//   } catch (error) {
//     console.log(error)
//     if (error instanceof ApiError) {
//       const errors = error.result;
//       // const { statusCode, headers } = error;
//     }
//   }
// }
// module.exports = getCombinedImages;