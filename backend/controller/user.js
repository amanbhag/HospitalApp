const express = require("express");
const { Patient, BillDetails } = require("../model/usermodel");

exports.createUser = async (req, res) => {
  try {
    // Extract patient details from request body
    const { imageName, age, billNumber, mobileNumber, name, gender } = req.body;

    // Create a new patient instance
    const patient = new Patient({
      imageName,
      age,
      billNumber,
      mobileNumber,
      name,
      gender,
    });

    // Save the patient to the database
    const savedPatient = await patient.save();

    res.json(savedPatient);
  } catch (error) {
    console.error("Error creating patient:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the patient." });
  }
};

exports.createBill = async (req, res) => {
  try {
    // Extract bill details from request body
    const {
      patientId,
      date,
      receiptNumber,
      serviceNumber,
      serviceName,
      price,
      quantity,
      amount,
    } = req.body;

    // Find the patient by ID
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).json({ error: "Patient not found." });
    }

    // Create a new bill details instance
    const billDetails = new BillDetails({
      date,
      receiptNumber,
      serviceNumber,
      serviceName,
      price,
      quantity,
      amount,
    });

    // Add the bill details to the patient's billDetails array
    patient.billDetails.push(billDetails);

    // Save the updated patient
    const updatedPatient = await patient.save();

    res.json(updatedPatient);
  } catch (error) {
    console.error("Error adding bill details:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding bill details." });
  }
};

exports.sendPatients = async (req, res) => {
  try {
    // Retrieve all patients from the database
    const patients = await Patient.find();

    res.json(patients);
  } catch (error) {
    console.error("Error retrieving patients:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving patients." });
  }
};
