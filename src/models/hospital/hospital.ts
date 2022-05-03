import mongoose from 'mongoose';
import IHopsital from "./interface"
const hospitalSchema = new mongoose.Schema<IHopsital>(
  {
    hopitalName: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    doctorsName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
hospitalSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Hospital = mongoose.model('hospital', hospitalSchema);
export default  Hospital;