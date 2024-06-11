require("dotenv").config();
const { Configuration, OpenAI} = require("openai");
const axios = require ("axios") ;



const generateImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const options = {
      method: "POST",
      url: "https://open-ai21.p.rapidapi.com/texttoimage2",
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": "open-ai21.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: { text: `${prompt}` },
    };

    let image = await axios.request(options);
    console.log(image.data);

    res.status(200).json({
      success: true,
      message: image.data,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { generateImage };
