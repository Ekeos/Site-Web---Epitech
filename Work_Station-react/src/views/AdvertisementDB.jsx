import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdvertisementDB() {
  // We declare a lot variable to get and put values
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [wages, setWages] = useState("");
  const [schedule, setSchedule] = useState("");
  const [id_type, SetIDType] = useState("");
  const [id_sector, SetIDSector] = useState("");
  const [id_company, SetIDCompany] = useState("");
  const [editId, setEditID] = useState(-1);
  const [test_button_add, setButtonAdd] = useState(false);
  const [cancel, setCancel] = useState(false);

  // Request from the back to put on the site all the datas of the choosen table
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/advertisement")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error axios", error);
      });
  }, []);

  // This function handle the edit, if the admin wants to change some values from one advertisement he clicks
  // on the button and all datas will but changeable
  const handleEdit = (id) => {
    setEditID(id);
    axios
      .get("http://localhost:8000/api/advertisement/" + id)
      .then((response) => {
        setTitle(response.data.message.title);
        setDescription(response.data.message.description);
        setAddress(response.data.message.address);
        setWages(response.data.message.wages);
        setSchedule(response.data.message.schedule);
        SetIDType(response.data.message.id_type);
        SetIDSector(response.data.message.id_sector);
        SetIDCompany(response.data.message.id_company);
      });
  };

  // Function for deleting one row in the choosen table
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/advertisement/" + id + "/delete")
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.error("Error axios", error);
      });
  };

  // This function handle the update, if the admin changes some values on one row and if he clicks on the button update
  // those values will be updated in the database
  const handleUpdate = () => {
    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/companies/" + id_company)
      .then((res) => {})
      .catch((err) =>
        alert("Id companies doesn't exist in the table Companies")
      );

    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/sector/" + id_sector)
      .then((res) => {})
      .catch((err) => alert("Id sector doesn't exist in the table Sector"));

    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/type/" + id_type)
      .then((res) => {})
      .catch((err) => alert("Id type doesn't exist in the table Type"));

    // Update datas in the table
    axios
      .put("http://localhost:8000/api/advertisement/" + editId + "/edit", {
        id: editId,
        title: title,
        description: description,
        address: address,
        wages: wages,
        schedule: schedule,
        id_type: id_type,
        id_company: id_company,
        id_sector: id_sector,
      })
      .then((res) => {
        location.reload();
        setEditID(-1);
      })
      .catch((err) => console.log(err));
  };

  const inputAdd = () => {
    setButtonAdd(true);
  };

  const handleAdd = () => {

    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/companies/" + id_company)
      .then((res) => {
        console.log("ok");
      })
      .catch((err) =>
        alert("Id companies doesn't exist in the table Companies")
      );

    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/sector/" + id_sector)
      .then((res) => {
        console.log("ok");
      })
      .catch((err) => alert("Id sector doesn't exist in the table Sector"));

    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/type/" + id_type)
      .then((res) => {
        console.log("ok");
      })
      .catch((err) => alert("Id type doesn't exist in the table Type"));

    // Create a row with those values in the database
    axios
      .post("http://localhost:8000/api/advertisement", {
        title: title,
        description: description,
        address: address,
        wages: wages,
        schedule: schedule,
        id_type: id_type,
        id_company: id_company,
        id_sector: id_sector,
      })
      .then((res) => {
        location.reload();
        setEditID(-1);
      })
      .catch((err) => console.log(err));
  };

  const cancelUpdate = () => {
    setCancel(false);
    setEditID(-1);
  };

  const cancelAdd = () => {
    setButtonAdd(false);
  };

  // In case if we have any data in the database
  if (data.length !== 0) {
    return (
      <div className="relative h-full">
        <div className="flex justify-between h-max">
          <button
            onClick={inputAdd}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border mb-2 border-blue-700 rounded m-2"
          >
            Add
          </button>
          <Link
            to={"/admin"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-2"
          >
            Retour
          </Link>
        </div>
        {/* If we click on the button "Add" we show a row with inputs */}
        {test_button_add === true ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50">
                <th>Title</th>
                <th>Description</th>
                <th>Address</th>
                <th>Wages</th>
                <th>Schedule</th>
                <th>ID Company</th>
                <th>ID Sector</th>
                <th>ID Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
                <td>
                  <textarea
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-1/2"
                    onChange={(e) => setWages(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setSchedule(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => SetIDCompany(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => SetIDSector(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => SetIDType(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    onClick={handleAdd}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 m-1 border border-green-500 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={cancelAdd}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 m-1 border border-red-700 rounded "
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          // Otherwise we put nothing
          <></>
        )}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50">
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Address</th>
              <th>Wages</th>
              <th>Schedule</th>
              <th>ID Company</th>
              <th>ID Sector</th>
              <th>ID Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.advertisements.map((ads) =>
            // We check which row has been selected and we transform in inputs this row
              ads.id === editId ? (
                <tr key={ads.id}>
                  <td>{ads.id}</td>
                  <td>
                    <input
                      type="text"
                      value={title}
                      className="w-10/12"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </td>
                  <td>
                    <textarea
                      type="text"
                      value={description}
                      className="w-10/12"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={address}
                      className="w-10/12"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={wages}
                      className="w-1/2"
                      onChange={(e) => setWages(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={schedule}
                      className="w-10/12"
                      onChange={(e) => setSchedule(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={id_company}
                      className="w-2/5"
                      onChange={(e) => SetIDCompany(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={id_sector}
                      className="w-2/5"
                      onChange={(e) => SetIDSector(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={id_type}
                      className="w-2/5"
                      onChange={(e) => SetIDType(e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={handleUpdate}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 m-1 border border-green-500 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={cancelUpdate}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-1 m-1 border border-red-700 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                // Otherwise we just show the datas without inputs
                <tr
                  key={ads.id}
                  className="bg-white border-b  border-gray-700 hover:bg-gray-50"
                >
                  <td>{ads.id}</td>
                  <td>{ads.title}</td>
                  <td>{ads.description}</td>
                  <td>{ads.address}</td>
                  <td>{ads.wages}</td>
                  <td>{ads.schedule}</td>
                  <td>{ads.id_company}</td>
                  <td>{ads.id_sector}</td>
                  <td>{ads.id_type}</td>
                  <td className="flex space-x-3">
                    <button
                      onClick={() => handleEdit(ads.id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-700 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(ads.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    );
  } else {
    // If there is any datas in the database we just put a big text
    return (
      <div className="relative h-full">
        <div className="flex justify-between">
          <button
            onClick={inputAdd}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 m-2 rounded"
          >
            Add
          </button>
          <Link
            to={"/admin"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 m-2 rounded"
          >
            Retour
          </Link>
        </div>
        {test_button_add === true ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50">
                <th>Title</th>
                <th>Description</th>
                <th>Address</th>
                <th>Wages</th>
                <th>Schedule</th>
                <th>ID Company</th>
                <th>ID Sector</th>
                <th>ID Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
                <td>
                  <textarea
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-1/2"
                    onChange={(e) => setWages(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-10/12"
                    onChange={(e) => setSchedule(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => SetIDCompany(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => SetIDSector(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => SetIDType(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    onClick={handleAdd}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 m-1 border w-full border-green-500 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={cancelAdd}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 m-1 border w-full border-red-700 rounded"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="flex flex-row items-center justify-center text-5xl h-full">
            No data yet
          </div>
        )}
      </div>
    );
  }
}
