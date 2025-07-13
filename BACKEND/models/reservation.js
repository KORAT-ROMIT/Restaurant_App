import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
      enum: ["09:00", "12:00", "15:00", "18:00", "21:00"], // example time slots
     validate: {
    validator: (value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value),
    message: "Please enter time in HH:mm format",
  },
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain 11 Digits."],
    maxLength: [11, "Phone number must contain 11 Digits."],
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
