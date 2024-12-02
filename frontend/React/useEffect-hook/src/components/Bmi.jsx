import { useState, useEffect } from "react";

function Bmi() {
  //variable Declaration
  const [selectedGender, setSelectedGender] = useState("");
  const [output, setOutput] = useState(0)
  const [weight, setWeight] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  //handle Changes
  //gender
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  //weight
  const handleWeightChange = (event) => {
    setWeight(Number(event.target.value));
  }
  //height
  const handleHeightChange = (event) => {
    setHeight(Number(event.target.value)/100);
  }
  //output canculation
  const bmiCalculate = () => {
  const output = weight / (height * height);
  setOutput((output) ? `${selectedGender} : ${output}` : "Enter valid input");
  }
  //useEffect Hook
  useEffect(bmiCalculate, [weight,height,selectedGender]);
  return (
    <div className="w-full h-screen bg-gray-600 flex flex-col justify-center items-center p-3">
      <h2 className="text-3xl font-bold text-white mb-6">BMI Calculator</h2>
      <div className="w-1/4 shadow-xl h-96 flex flex-col justify-center gap-4 p-6 bg-gray-800 text-white rounded-lg">
        <div className="w-full flex gap-3">
          <label className="flex items-center">
            <input
              type="radio"
              value="Male"
              checked={selectedGender === "Male"}
              onChange={handleGenderChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Female"
              checked={selectedGender === "Female"}
              onChange={handleGenderChange}
              className="mr-2"
            />
            Female
          </label>
        </div>
        <div className="w-full">
          <label htmlFor="" className="block text-gray-300 mb-1">Weight (KG):</label>
          <input
            className="text-black w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Enter weight in KG..."
            onChange={handleWeightChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="" className="block text-gray-300 mb-1">Height (CM):</label>
          <input
            className="text-black w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Enter height in CM..."
            onChange={handleHeightChange}
          />
        </div>
        <div className="output mt-4">
          <input
            type="text"
            id="disabled-input-2"
            aria-label="disabled input 2"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
            value={output}
            disabled
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default Bmi;
