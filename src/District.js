import { useState } from "react";
import "./App.css";
const District = () => {
  const [data, setdata] = useState([]);
  const [fdata, setfdata] = useState();
  const apidata = async () => {
    let apiurl = await fetch(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${fdata}`
    );
    let cast = await apiurl.json();
    setdata(cast.districts);
  };

  const submitdata = () => {
    apidata();
  };

  return (
    <>
      <h2>Enter State id to get District id And Name</h2>
      <div className="form">
        <input
          onChange={(v) => {
            setfdata(v.target.value);
          }}
          type="number"
          placeholder="enter state id"
        />
        <button onClick={submitdata}>Submit</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>district_id</th>
              <th>district_name</th>
            </tr>
          </thead>

          {data.map((val) => {
            return (
              <tr key={val.district_id}>
                <td>{val.district_id}</td>
                <td>{val.district_name}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default District;
