import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";
import {User} from "../models/user.models.js";
import {uploadOnCloudnary} from "../utils/cloudnary.js"
import {ApiResponse} from "../utils/apiResponse.js"
const registerUser = asyncHandler (async (req,res)=>{
    //get user details from frontend
    // validation - not empty
    // check if user already exists using username or email
    //check for images, check for avatar
    // upload image to cloudnary , avatar is upload correctly or not 
    // create user object - create entry into database (mongodb)
    // remove password and refresh token field from response
    // checck for user creation 
    // return the response

    //step 1
    // if data come from any form or as a json
    const {fullname,email,username,password} = req.body
    console.log("Email: ",email);


    //step 2
    // if(fullname==""){
    //     throw new ApiError(400,"Fullname is required")
    // }

    if([fullname,email,username,password].some( (field) => {
field?.trim()==""
    }))
    {
        throw new ApiError(400,"All field are required")
    }


    //step 3
    const existedUser = User.findOne({
        $or:[{username},{email}]
    })

    if(existedUser){
        throw new ApiError(409,"user already exist")
    }

    // step 4
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath)
    {
        throw new ApiError(400,"Avatar file is required");
    }

    //step 5
    const avatar = await uploadOnCloudnary(avatarLocalPath);
    const coverImage = await uploadOnCloudnary(coverImageLocalPath);

    if(!avatar)
    {
        throw new ApiError(400,"Avatar file is required");
    }

    //step 6
    const user=await User.create({
        fullname,
        avatar : avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    })
    // step 7 also
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    ) //user create

    if(!createdUser)
    {
        throw new ApiError(500,"Something went wrong while registering the user")
    }

    //step 8
    return res.status(201).json(
        new ApiResponse(200,createdUser,"User registered succesfully")
    )




})


export {registerUser}