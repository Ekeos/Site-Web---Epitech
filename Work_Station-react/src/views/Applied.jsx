import { useEffect, useState } from "react";
import axios from "axios";

// For csrftoken in index.html
const csrftoken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrftoken;

export default function Applied() {
  // Declaration of variables
  const myuser = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState([]);
  let tab_user = [];
  const [tab_ad, setTabAd] = useState([]);
  let j = 0;

  // We get all datas from postulate database
  useEffect(() => {
    axios.get("http://localhost:8000/api/postulate").then((response) => {
      setData(response.data.postulates);
    });
  }, []);

  // If the id_people match with the id of the current user we keep the row
  useEffect(() => {
    if (data.length != 0) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id_people === myuser.id) {
          tab_user[j] = data[i];
          j++;
        }
      }

      // We iterate with the keeped rows and we keep the advertisement row in question
      for (let i = 0; i < tab_user.length; i++) {
        axios
          .get("http://localhost:8000/api/advertisement/" + tab_user[i].id_ad)
          .then((response) => {
            setTabAd((ads) => [...ads, response.data.message]);
          })
          .catch((error) => {});
      }
    }
  }, [data]);

  if (tab_ad.length != 0) {
    return (
      <div className="h-full">
        {tab_ad.map((ads) => (
          <div key={ads.id}>
            <div className="mb-auto mt-4">
              <div className="shadow-md hover:shadow-lg w-full p-2 md:w-1/2 mb-4 md:mb-2 bg-blue-100 mx-4">
                <div className="font-bold text-3xl mb-2 mt-2"></div>
                <div>{ads.title}</div>
                <div className="font-bold text-xl mt-2">Company</div>
                <div>{ads.company}</div>

                <div className="font-bold text-xl mt-2">Description</div>
                <div>{ads.description}</div>
                <div className="font-bold text-xl mt-2">Wages</div>
                <div>{ads.wages}</div>
                <div className="font-bold text-xl mt-2">Schedule</div>
                <div>{ads.schedule}</div>

                <div className="font-bold text-xl mt-2">Address</div>
                <div>{ads.address}</div>
                <div className="font-bold text-xl mt-2">Phone number</div>
                <div>{ads.phone}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <main className="flex flex-col md:flex-row h-full items-center justify-center text-5xl">
        No Applied yet
      </main>
    );
  }
}
