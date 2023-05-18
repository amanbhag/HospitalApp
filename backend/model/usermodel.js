const mongoose = require("mongoose");

// Schema for Bill Details
const billDetailsSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  receiptNumber: {
    type: String,
    required: true,
  },
  serviceNumber: {
    type: String,
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

// Schema for Patient
const patientSchema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  billNumber: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  billDetails: [billDetailsSchema], // using  bill details as an array
});

// Create models from the schemas
const Patient = mongoose.model("Patient", patientSchema);
const BillDetails = mongoose.model("BillDetails", billDetailsSchema);

module.exports = {
  Patient,
  BillDetails,
};
