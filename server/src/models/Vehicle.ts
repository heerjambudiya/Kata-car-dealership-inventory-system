import { Schema, model, InferSchemaType } from "mongoose";

const vehicleSchema = new Schema(
  {
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    mileage: { type: Number, required: true },
    fuelType: { type: String, required: true },
    transmission: { type: String, required: true },
    status: {
      type: String,
      enum: ["Available", "Sold", "Reserved"],
      default: "Available",
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export type IVehicle = InferSchemaType<typeof vehicleSchema>;

const Vehicle = model<IVehicle>("Vehicle", vehicleSchema);

export default Vehicle;