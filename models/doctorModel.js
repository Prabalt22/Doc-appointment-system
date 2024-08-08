const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      require: [true, "first name is required"],
    },
    lastName: {
      type: String,
      require: [true, "last name is required"],
    },
    phone: {
      type: String,
      require: [true, "phone number is required"],
    },
    email: {
      type: String,
      require: [true, "email is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      require: [true, "address is require"],
    },
    specialization: {
      type: String,
      require: [true, "specialization is required"],
    },
    experience: {
      type: String,
      require: [true, "experience is required"],
    },
    feesPerCunsaltation: {
      type: Number,
      require: [true, "fee is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timing: {
      type: Object,
      require: [true, "timing is required"],
    },
  },
  { timestamps: true }
);

const doctorModule = mongoose.model("doctors", doctorSchema);
module.exports = doctorModule;
