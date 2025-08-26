import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



//Register Controller
export const registerController = async (req,res)=>{
    try{
         const {username,email,password} =req.body; 
         //validation
         if(!username || !email || !password){
          return  res.status(400).send({
                success:false,
                message:"Please Provide All Fields"
            })
         }
         //check exisiting user 
         const existingUser = await userModel.findOne({email})
         if(existingUser){
           return res.status(409).send({
                success:false,
                message:'User Already exist'
            })
         }
         //Password hashing
         const salt = await bcrypt.genSalt(10);
         const hashedPassword =await bcrypt.hash(password,salt);

       
           

         


         //save user
         const newUser = new userModel({username ,email,password: hashedPassword})
         await newUser.save();
         return res.status(201).send({
            success:true,
            message:"user created successfully",
         })

    }catch(error){
        console.log(error);
       return res.status(500).send({
            success:false,
            message:'Register api',
            error
        })

    }

   

}
//login controller
export const loginController = async(req,res)=>{
try{
const {email,password}=req.body;
//find user 
const user = await userModel.findOne({email});
//validation
if(!user){
    return res.status(404).send({
        success:false,
        message:"Invalid credinals",

        
    })
}

//match password 
const isMatch = await bcrypt.compare(password,user.password);
if(!isMatch){
     return res.status(401).send({
        success:false,
        message:"Invalid credentinals",
        
    })
}
  //Token generation
         const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
 expiresIn : "1d",
         });

return res.status(200).send({
        success:true,
        token,
        message:"login successfully",
        user:{
            id : user._id,
            username:user.username,

            email: user.email

        }
    })

}catch(error){
    console.log(error)
   return res.status(500).send({
        success:false,
        message:"login api error",
        error
    })
}
}