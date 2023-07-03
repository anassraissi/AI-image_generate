const {Configuration,OpenAi, OpenAIApi}=require('openai');

const configuration=new Configuration({
    apiKey:`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`,
})

const openai=new OpenAIApi(configuration);

const generateImage=async(req,res)=>{
    try{
        const response = await openai.createImage({
            prompt: "Polar bear on ice skates",
            n: 1,
            size: "1024x1024",
          });
          const image_url = response.data.data[0].url;
          res.status(200).json({
            success:true,
            data:image_url
          })
    }
    catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
 
}
//http://localhost:5000/openai/generateimage test by Postman

module.exports={generateImage};