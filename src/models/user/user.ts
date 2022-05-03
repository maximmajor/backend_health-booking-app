import mongoose from 'mongoose';
import IUser from "./interface"

const userSchema = new mongoose.Schema<IUser>(
  {
    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hopital",
      required: true,
    },
    name: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    illnessType: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
userSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const User = mongoose.model('user', userSchema);
export default  User;