import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"; //filesystem
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
  api_key: process.env.CLOUDNARY_API_KEY, 
  api_secret: process.env.CLOUDNARY_API_SECRET
});


const uploadOnCloudnary = async (localFilePath) => {
    try {
        if(! localFilePath)
        {
            return null;
        }
        
        const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //console.log("File upload on cloudinary ",response.url)
        fs.unlinkSync(localFilePath);
        return response;
        
        
    } catch (error) {
        fs.unlinkSync(localFilePath)// remove the locally saved temparay file as the upload  got failed
    }
}

export {uploadOnCloudnary};