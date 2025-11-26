import express from "express"

import {
    createUser,deleteUser,getUser,updateUser,} from  "../controller/user.js"

    const routers = express.Router();

    routers.post("/create",createUser);
    routers.get("/get",getUser);
    routers.put("/update/:id",updateUser);
    routers.delete("/delete/:id",deleteUser);


export default routers;