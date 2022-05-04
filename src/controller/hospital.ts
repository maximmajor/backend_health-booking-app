import { Router } from 'express';
import { Request, Response, NextFunction } from 'express';
const router = Router();
import Hospital from "../models/hospital/hospital"
import cloudinary from "../utils/cloudinary";

const secret: string = process.env.ACCESS_TOKEN_SECRET as string;

export const addHospitals = async (req: any, res: Response, next: NextFunction) => {
    //const { hospitalName, address, doctorsName } = req.body
    try {
        const newHospitals = new Hospital({
            hospitalName:  req.body.hospitalName,
            address:  req.body.address,
            doctorsName:  req.body.doctorsName,
        })
        const savedHospial: any = await newHospitals.save()
        res.status(200).json(savedHospial)
    }
    catch (err) {
        res.status(500).json("failure");
    }
}


export const getListOfHospitals = async (req: any, res: Response, next: NextFunction) => {
    const { hospitalName, address, doctorsName } = req.body
    try {
       const listOfHospials: any = await Hospital.find()
        if(!listOfHospials){
            res.status(400).json("There are no hospitals in your location")
            return
        }
        res.status(200).json(listOfHospials)
    }
    catch (err) {
        res.status(500).json("server error");
    }
}

export const getMockListOfHospitals = async (req: any, res: Response, next: NextFunction) => {
    const { hospitalName, address, doctorsName } = req.body
    try {
        res.status(200).json([
            {
                "hospitalName": "St. Nicholas Hospital",
                "address": "Lagos Island",
                "doctorsName": "mr Robert John",
                "createdAt": "2022-05-04T10:02:33.792Z",
                "updatedAt": "2022-05-04T10:02:33.792Z",
                "id": "62724f39bf4bcfc90dab5079"
            },
            {
                "hospitalName": "First Consultant Hospital",
                "address": "Obalende",
                "doctorsName": "mr william simon",
                "createdAt": "2022-05-04T10:05:05.599Z",
                "updatedAt": "2022-05-04T10:05:05.599Z",
                "id": "62724fd1bf4bcfc90dab507b"
            },
            {
                "hospitalName": "Eko Hospital",
                "address": "lekki",
                "doctorsName": "mr femi ademola",
                "createdAt": "2022-05-04T10:06:44.515Z",
                "updatedAt": "2022-05-04T10:06:44.515Z",
                "id": "62725034bf4bcfc90dab507d"
            },
            {
                "hospitalName": "Holy Trinity Hospital",
                "address": "ikeja lagos",
                "doctorsName": "mr muazu abu",
                "createdAt": "2022-05-04T10:08:40.962Z",
                "updatedAt": "2022-05-04T10:08:40.962Z",
                "id": "627250a8bf4bcfc90dab5085"
            },
            {
                "hospitalName": "Adefemi Hospital",
                "address": "ikeja lagos",
                "doctorsName": "mr tomisola abigail",
                "createdAt": "2022-05-04T10:09:30.756Z",
                "updatedAt": "2022-05-04T10:09:30.756Z",
                "id": "627250dabf4bcfc90dab5087"
            }
        ])
    }
    catch (err) {
        res.status(500).json("server error");
    }
}