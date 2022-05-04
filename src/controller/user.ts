import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
const router = Router();
import User from "../models/user/user"
import cloudinary from "../utils/cloudinary";

const secret: string = process.env.ACCESS_TOKEN_SECRET as string;

export const bookAppointment = async (req: any, res: Response, next: NextFunction) => {
    const hospitalId = req.params.hospitalId
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const newUser = new User({
            hospitalId: hospitalId,
            name: req.body.name,
            phonenNmber: req.body.phoneNumber,
            email: req.body.email,
            illnessType: req.body.illnessType,
            photo: result.secure_url,
            cloudinary_id: result.public_id,
        })
        const savedUser: any = await newUser.save()
        res.status(200).json("success")
    }
    catch (err) {
        res.status(500).json("failure");
    }
}
