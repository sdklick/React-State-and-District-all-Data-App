import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
const State = () => {
  const [data, setdata] = useState([]);
  const [total, settotal] = useState();
  const apidata = async () => {
    let apiurl = await fetch(
      `https://cdn-api.co-vin.in/api/v2/admin/location/states`
    );
    let cast = await apiurl.json();
    setdata(cast.states);
    settotal(cast.ttl);
  };
  useEffect(() => {
    apidata();
  }, []);

  return (
    <>
      <div
        style={{ backgroundColor: "#4B79A1" }}
        className=" row row-cols-1 row-cols-md-6 g-4 "
      >
        {data.map((val) => {
          return (
            <div key={val.state_id} className="col">
              <div className="card mt-3 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{val.state_id}</h5>
                    <p className="card-text">{val.state_name}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-center text-white bg-success">Total States={total}</p>
      <br />
    </>
  );
};

export default State;
