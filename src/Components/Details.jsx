import React, { useEffect, useContext } from "react";
import DetailsNav from "./Nav/DetailsNav";
import { DetailContext } from "../Context/Context";

function Details() {
  const { state, dispatch } = useContext(DetailContext);
  const { tableData, customTableData } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://5.189.180.8:8010/detail");
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: "FETCH_TABLE_DATA", payload: data });
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const calculateItemAmount = (qty, rate) => {
    return qty * rate;
  };

  const getTotalAmount = () => {
    const totalFromApiData = tableData.reduce(
      (total, item) => total + calculateItemAmount(item.qty, item.rate),
      0
    );
    const totalFromCustomData = customTableData.reduce(
      (total, item) => total + calculateItemAmount(item.qty, item.rate),
      0
    );
    const totalAmount = totalFromApiData + totalFromCustomData;
    const displayTotal = isNaN(totalAmount) ? 0 : totalAmount;
    return displayTotal.toString();
  };

  return (
    <>
      <DetailsNav />
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border-2 border-black ">
          <thead>
            <tr>
              <th className="border-2 border-black px-4 py-2">Sr No</th>
              <th className="border-2 border-black px-4 py-2">Item Code</th>
              <th className="border-2 border-black px-4 py-2">Item Name</th>
              <th className="border-2 border-black px-4 py-2">Qty</th>
              <th className="border-2 border-black px-4 py-2">Rate</th>
              <th className="border-2 border-black px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td className="border border-black px-4 py-2">{index + 1}</td>
                <td className="border border-black px-4 py-2">
                  {item.item_code}
                </td>
                <td className="border border-black px-4 py-2">
                  {item.item_name}
                </td>
                <td className="border border-black px-4 py-2">{item.qty}</td>
                <td className="border border-black px-4 py-2">{item.rate}</td>
                <td className="border border-black px-4 py-2">
                  {calculateItemAmount(item.qty, item.rate)}
                </td>
              </tr>
            ))}
            {customTableData.map((item, index) => (
              <tr key={index + tableData.length}></tr>
            ))}
            <tr>
              <td />
              <td />
              <td />
              <td />
              <td className="border border-black px-4 py-2 text-center">
                Total Amount
              </td>
              <td className="border border-black px-4 py-2">
                {getTotalAmount()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Details;
