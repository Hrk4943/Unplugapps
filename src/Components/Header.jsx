import React, { useState, useContext } from "react";
import HeaderNav from "./Nav/HeaderNav";
import { DetailContext } from "../Context/Context";

function Header() {
  const { dispatch } = useContext(DetailContext);
  const [formData, setFormData] = useState({
    vrNo: "",
    vrDate: "",
    status: "A",
    acName: "",
    acAmt: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CUSTOM_DATA",
      payload: formData,
    });
    setFormData({
      vrNo: "",
      vrDate: "",
      status: "A",
      acName: "",
      acAmt: "",
    });
    console.log(formData);
  };

  return (
    <>
      <HeaderNav />
      <div className="max-w-md mx-auto mt-5">
        <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-wrap -mx-16">
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="vrNo"
              >
                Vr No
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="vrNo"
                type="text"
                placeholder="Enter Vr No"
                name="vrNo"
                value={formData.vrNo}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="vrDate"
              >
                Vr Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="vrDate"
                type="text"
                placeholder="Enter Vr Date"
                name="vrDate"
                value={formData.vrDate}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/3 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>
          </div>
          <div className="mb-4 flex flex-wrap -mx-16">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="acName"
              >
                Ac Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="acName"
                type="text"
                placeholder="Enter Ac Name"
                name="acName"
                value={formData.acName}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="acAmt"
              >
                Ac Amt
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="acAmt"
                type="number"
                placeholder="Enter Ac Amt"
                name="acAmt"
                value={formData.acAmt}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-200 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              New
            </button>
            <button
              className="bg-yellow-200 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Insert
            </button>
            <button
              className="bg-yellow-200 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
            <button
              className="bg-yellow-200 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Print
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Header;
