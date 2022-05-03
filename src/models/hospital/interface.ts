import mongoose from 'mongoose';

export interface IHopsital extends mongoose.Document {
    id: string;
    _id: string;
    hopitalName: string;
    address?: string;
    doctorsName?: string;
  }
  
  export default IHopsital