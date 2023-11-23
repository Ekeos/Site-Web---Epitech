import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Advertisement() {
  const [data_ad, setData] = useState([]);
  const [data_company, setData2] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET ID DATA FROM URL
  let id = useParams();
  let title = data_ad.title;
  let description = data_ad.description;
  let address = data_ad.address;
  let phone = data_company.phone_number;
  let company = data_company.company_name;
  let wages = data_ad.wages;
  let schedule = data_ad.schedule;
  let my_id_company = data_ad.id_company;

  // Request from the back
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/advertisement/" + id.id)
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("Error axios", error);
      });
  }, []);

  // Request from the back but in this case we wait the end of the first UseEffect so check if my_id_company is undefined
  useEffect(() => {
    if (my_id_company != undefined) {
      axios
        .get("http://localhost:8000/api/companies/" + my_id_company)
        .then((response) => {
          setData2(response.data.message);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error axios", error);
        });
    }
  }, [my_id_company]);

  // If the 2 useEffect are slow we put that message which show at the user that the request is working
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading) {
    return (
      <div className="mb-auto mt-4 flex justify-center">
        <div className="shadow-md hover:shadow-lg w-full p-2 md:w-1/2 mb-4 md:mb-2 bg-blue-100 mx-4">
          <div className="font-bold text-3xl mb-2 mt-2"></div>
          <div className="text-4xl text-center mb-4">{title}</div>
          <div className="font-bold text-xl mt-2 mb-2">Company</div>
          <div>{company}</div>

          <div className="font-bold text-xl mt-2 mb-2">Description</div>
          <div>{description}</div>
          <div className="font-bold text-xl mt-2 mb-2">Wages</div>
          <div>{wages}</div>
          <div className="font-bold text-xl mt-2 mb-2">Schedule</div>
          <div>{schedule}</div>

          <div className="font-bold text-xl mt-2 mb-2">Address</div>
          <div>{address}</div>
          <div className="font-bold text-xl mt-2 mb-2">Phone number</div>
          <div>{phone}</div>
          <div className="flex items-center justify-center">
            <Link
              to="applyform"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2 w-32 text-center"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
