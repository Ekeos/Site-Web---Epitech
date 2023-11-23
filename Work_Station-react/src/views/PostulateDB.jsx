import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostulateDB() {
  // We declare a lot variable to get and put values
  const [data, setData] = useState([]);
  const [id_people, setIDPeople] = useState("");
  const [id_ad, setIDAd] = useState("");
  const [date, setDate] = useState("");
  const [editId, setEditID] = useState(-1);
  const [test_button_add, setButtonAdd] = useState(false);
  const [cancel, setCancel] = useState(false);

  // Request from the back to put on the site all the datas of the choosen table
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/postulate")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error axios", error);
      });
  }, []);

  // This function handle the edit, if the admin wants to change some values from one postulate he clicks
  // on the button and all datas will but changeable
  const handleEdit = (id) => {
    setEditID(id);
    axios.get("http://localhost:8000/api/postulate/" + id).then((response) => {
      setIDPeople(response.data.message.id_people);
      setIDAd(response.data.message.id_ad);
      setDate(response.data.message.date);
    });
  };

  // Function for deleting one row in the choosen table
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/postulate/" + id + "/delete")
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
      .get("http://localhost:8000/api/people/" + id_people)
      .then((res) => {})
      .catch((err) => alert("Id people doesn't exist in the table People"));

    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/advertisement/" + id_ad)
      .then((res) => {})
      .catch((err) =>
        alert("Id advertisement doesn't exist in the table Advertisement")
      );

    // Update datas in the table
    axios
      .put("http://localhost:8000/api/postulate/" + editId + "/edit", {
        id: editId,
        id_people: id_people,
        id_ad: id_ad,
        date: date,
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
      .get("http://localhost:8000/api/people/" + id_people)
      .then((res) => {})
      .catch((err) => alert("Id people doesn't exist in the table People"));

    // Handle the error if the some foreign key id doesn't exist
    axios
      .get("http://localhost:8000/api/advertisement/" + id_ad)
      .then((res) => {})
      .catch((err) =>
        alert("Id advertisement doesn't exist in the table Advertisement")
      );

    // Create a row with those values in the database
    axios
      .post("http://localhost:8000/api/postulate", {
        id_people: id_people,
        id_ad: id_ad,
        date: date,
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
        {/* If we click on the button "Add" we show a row with inputs */}
        {test_button_add === true ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50">
                <th>ID people</th>
                <th>ID advertisement</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setIDPeople(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setIDAd(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    onClick={handleAdd}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 mb-1 border border-green-500 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={cancelAdd}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 ml-1 border border-red-700 rounded "
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
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50">
              <th>ID</th>
              <th>ID User</th>
              <th>ID Advertisement</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.postulates.map((mypostulates) =>
              // We check which row has been selected and we transform in inputs this row
              mypostulates.id === editId ? (
                <tr
                  key={mypostulates.id}
                  className="bg-white border-b  border-gray-700 hover:bg-gray-50 "
                >
                  <td>{mypostulates.id}</td>
                  <td>
                    <input
                      type="number"
                      value={id_people}
                      onChange={(e) => setIDPeople(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={id_ad}
                      onChange={(e) => setIDAd(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={handleUpdate}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={cancelUpdate}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-1 ml-1 border border-red-700 rounded "
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                // Otherwise we just show the datas without inputs
                <tr
                  key={mypostulates.id}
                  className="bg-white border-b  border-gray-700 hover:bg-gray-50 "
                >
                  <td>{mypostulates.id}</td>
                  <td>{mypostulates.id_people}</td>
                  <td>{mypostulates.id_ad}</td>
                  <td>{mypostulates.date}</td>
                  <td className="flex space-x-3">
                    <button
                      onClick={() => handleEdit(mypostulates.id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(mypostulates.id)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded "
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
                <th>ID people</th>
                <th>ID advertisement</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setIDPeople(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    onChange={(e) => setIDAd(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    onClick={handleAdd}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={cancelAdd}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 ml-1 border border-red-700 rounded "
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="flex flex-row h-full items-center justify-center text-5xl">
            No data yet
          </div>
        )}
      </div>
    );
  }
}
