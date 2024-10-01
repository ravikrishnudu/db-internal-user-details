import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSheetData } from "./redux/dataSlice";
import "./App.css";

const API = process.env.REACT_APP_API;

function App() {
  const dispatch = useDispatch();
  const sheetData = useSelector((state) => state.data.sheetData);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API}/detailsFromGoogleSheet`);
        const data = await response.json();
        dispatch(setSheetData(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [dispatch]);

  if (!sheetData) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Mobile</th>
        </tr>
      </thead>
      <tbody>
        {sheetData.map((row, index) => (
          <tr key={index}>
            <td>{row["Serial No"]}</td>
            <td>{row["Name"]}</td>
            <td>{row["Gender"]}</td>
            <td>{row["Age"]}</td>
            <td>{row["Mobile"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
