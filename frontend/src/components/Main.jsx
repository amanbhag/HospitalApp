import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientGrid = () => {
  const [patients, setPatients] = useState([]);
  const [activePatient, setActivePatient] = useState(null);
  const [billDetails, setBillDetails] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get(
        "https://hospitallapp.onrender.com/patients"
      ); // Replace with your API endpoint
      setPatients(response.data);
      setActivePatient(response.data[0]);
      setBillDetails(response.data[0].billDetails);
      // Set the first patient as active by default
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handlePatientClick = (patient) => {
    setActivePatient(patient);
    setBillDetails(patient.billDetails);
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateTimeString).toLocaleString("en-US", options);
  };

  const handlePrintBill = () => {
    window.print();
  };

  const renderPrescription = () => {
    if (activePatient) {
      return (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Billing Details</h3>
          {billDetails.map((detail) => (
            <div key={detail._id}>
              <div>Service Number: {detail.serviceNumber}</div>
              <div>Service Name: {detail.serviceName}</div>
              <div>Price: {detail.price}</div>
              <div>Quantity: {detail.quantity}</div>
              <div>Amount: {detail.amount}</div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="flex justify-between">
      <div className="grid grid-rows-5 gap-3 w-[30%]">
        {patients.map((patient) => (
          <button
            key={patient._id}
            className={`p-1 bg-[#cbe3ff] rounded-lg ${
              activePatient && activePatient._id === patient._id
                ? "bg-[#ffffff] relative w-[120%]"
                : ""
            }`}
            onClick={() => handlePatientClick(patient)}
          >
            <div className="flex">
              <div className="w-[30%] border border-[#312E81] border-2 rounded">
                <img
                  src={patient.imageName}
                  alt="Patient"
                  className="h-full rounded"
                />
              </div>
              <div className="w-[70%] flex flex-col items-start p-2">
                <div className="font-semibold capitalize">{`${patient.name}`}</div>
                <div className="font-semibold capitalize">{`${patient.age}, ${patient.gender}`}</div>
                {activePatient && activePatient._id === patient._id ? (
                  <>
                    <div className="font-semibold">
                      Bill No: {patient.billNumber}
                    </div>
                    <button
                      className="mt-2 px-3 w-[70%] text-[#312E81] border-[#312E81] border-2 rounded-full"
                      onClick={handlePrintBill}
                    >
                      View Prescription
                    </button>
                  </>
                ) : (
                  <div>Bill No: {patient.billNumber}</div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="w-[68%] bg-[#ffffff] rounded-2xl z-0 p-10">
        <div className="border border-3 p-2 border-[#312E81] rounded-2xl w-full h-[81%]">
          <div className="flex items-center justify-between">
            <div className="font-bold">Billing Details</div>
            <div>
              <button
                className="rounded-full px-6 py-1 bg-[#312E81] font-light text-white"
                onClick={handlePrintBill}
                disabled
              >
                Print bill
              </button>
            </div>
          </div>
          <div className="bg-[#f3f3f3] flex justify-between p-4 w-full mt-6 items-center">
            <div className="flex flex-col w-[20%]">
              <div className="font-light">Patient name</div>
              <div className="font-bold capitalize text-sm mt-2">
                {activePatient?.name}
              </div>
            </div>
            <div className="flex flex-col w-[20%]">
              <div className="font-light">Age/Gender</div>
              <div className="font-bold capitalize text-sm mt-2">
                {activePatient?.age}/{activePatient?.gender}
              </div>
            </div>
            <div className="flex flex-col w-[20%]">
              <div className="font-light">Bill no</div>
              <div className="font-bold capitalize text-sm mt-2">
                {activePatient?.billNumber}
              </div>
            </div>
            <div className="flex flex-col w-[25%]">
              <div className="font-light">Date time</div>
              <div className="font-bold capitalize text-xs mt-2">
                {formatDateTime(activePatient?.billDetails[0]?.date)}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-light">Receipt no</div>
              <div className="font-bold capitalize mt-2">
                {activePatient?.billDetails[0]?.receiptNumber}
              </div>
            </div>
          </div>
          <div className="w-full">
            <table className="w-full p-2">
              <thead className="flex justify-between px-2 border-b-2 border-[#312E81] items-center">
                <div className="m-1">
                  <th className="p-2">Sr.no</th>
                  <th className="p-2">Service Name</th>
                </div>
                <div className="m-1">
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Amount</th>
                </div>
              </thead>
              <tbody>
                {activePatient?.billDetails?.map((item, idx) => (
                  <tr
                    className="flex justify-between px-2 items-center"
                    key={item._id}
                  >
                    <div className="m-1">
                      <td className="px-4">{idx + 1}</td>
                      <td className="px-4">{item.serviceName}</td>
                    </div>
                    <div className="m-1">
                      <td className="px-8">{item.price}</td>
                      <td className="px-8">{item.quantity}</td>
                      <td className="px-8">{item.amount}</td>
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-20 w-full bg-[#f3f3f3]">
            <div className="flex w-full justify-between">
              <div className="">Mobile Number</div>
              <div className="font-semibold">{activePatient?.mobileNumber}</div>
            </div>

            <div className="flex w-full justify-between">
              <div className="">Tax</div>
              <div className="font-semibold">
                {activePatient?.billDetails[0]?.price}
              </div>
            </div>
            <div className="flex w-full justify-between border border-b-[#312E81]">
              <div className="">Discount</div>
              <div className="font-semibold">36</div>
            </div>
            <div className="flex w-full justify-between pb-4 pt-3">
              <div className="font-bold">Total</div>
              <div className="font-semibold px-4 ">500</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientGrid;
