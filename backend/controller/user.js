import UserModel from "../model/userModel.js";

const createUser = async (req,res)=>{
    try{
        const {name,email,lastName,phone}=req.body;
        const newUser = new UserModel({name,email,lastName,phone});
        await newUser.save();
        res
        .status(200)
        .json({success:true,message:"user created",newUser});
    }
    catch(error){
        res
        .status(500)
        .json({success:false,message:"internal error",error});
    }
};

const getUser = async (req,res)=>{
    try{
        const users=await UserModel.find();
        if (users.length === 0){
            return res
            .status(404)
            .json({success:false,message:"user not found",users});

        }
        res.status(200).json({success:true,users})
    } 
    catch(error){
        res
        .status(500)
        .json({success:false,message:"internal error",error});
    }
};

const updateUser = async (req,res)=>{
    try{
        const userId = req.params.id;
        const updatedUser = await UserModel.findByIdAndUpdate(userId,req.body,{
            new:true,
        });
    if (!updatedUser){
        return res
        .status(404)
        .json({success:false,message:"user not found"})
    }
    res.status(200).json({
        success:true,
        message: "user updated successfully",
        updatedUser,
    });
    }
    catch(error){
        res
        .status(500)
        .json({success:false,message:"internal server error",error});
    }
}

// delete user function

const deleteUser = async (req,res)=>{
    try {
        const userId = req.params.id;
        const deletedUser= await UserModel.findByIdAndDelete(userId)
        if(!deletedUser){
            return res
            .status(404)
            .json({success:false,message:"user not found"})
        }
        res
        .status(200)
        .json({success:true,message:"user deleted successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({success:false,messsage:"internal server error"})
    }
};

export {createUser,getUser,updateUser,deleteUser};