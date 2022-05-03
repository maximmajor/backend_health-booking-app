import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    id: string;
    _id: string;
    hospitalId: mongoose.Schema.Types.ObjectId;
    name: string;
    phoneNumber: string;
    email: string;
    illnessType: string;
    photo: string;
  }
  
  export default IUser