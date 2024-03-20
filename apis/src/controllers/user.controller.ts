import { Response , Request} from "express";
import logger from '../utils/logger'
import { createUser } from "../service/user.service";
import { CreateUserInput } from "../schema/user.schema";
import { omit } from "lodash";
import UserModel from "../model/user.model";

export async function createUserHandler(req:Request<{}, {}, CreateUserInput>, res: Response){
   
    try {
        const user = await createUser(req.body)
        //console.log("inside", user)
        return res.json({data: omit(user.toJSON(), "password"), message: "User created successfully"})
    } catch (e:any) {
        logger.error(e.error)
        return res.status(409)
    }
}
export async function updateUserHandler(req:Request, res: Response){
    const userId = res.locals.user._doc?._id || res.locals.user?._id;
    console.log("user", userId)
    console.log("user", req.body)
    
    
    try {
        const user = await UserModel.findOneAndUpdate({_id: userId}, req.body, {new: true})
        //console.log("inside", user)
        if(user) 
            return res.json({data: omit(user.toJSON(), "password"), message: "User Updated successfully"})
        
    } catch (e:any) {
        logger.error(e.error)
        return res.status(409)
    }
}