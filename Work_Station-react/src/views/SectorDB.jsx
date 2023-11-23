import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SectorDB() {
  // We declare a lot variable to get and put values
  const [data, setData] = useState([]);
  const [libelle, setSector] = useState("");
  const [editId, setEditID] = useState(-1);
  const [test_button_add, setButtonAdd] = useState(false);
  const [cancel, setCancel] = useState(false);

  // Request from the back to put on the site all the datas of the choosen table
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/sector")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error axios", error);
      });
  }, []);

  // This function handle the edit, if the admin wants to change some values from one sector he clicks
  // on the button and all datas will but changeable
  const handleEdit = (id) => {
    setEditID(id);
    axios.get("http://localhost:8000/api/sector/" + id).then((response) => {
      setSector(response.data.message.libelle);
    });
  };

  // Function for deleting one row in the choosen table
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/sector/" + id + "/delete")
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
    // Update datas in the table
    axios
      .put("http://localhost:8000/api/sector/" + editId + "/edit", {
        id: editId,
        libelle: libelle,
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
    // Create a row with those values in the database
    axios
      .post("http://localhost:8000/api/sector", {
        libelle: libelle,
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
                <th>Libelle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setSector(e.target.value)}
                  />
                </td>
                <td className="flex space-x-3">
                  <button
                    onClick={handleAdd}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={cancelAdd}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded "
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
              <th>Libelle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.sectors.map((mysector) =>
              // We check which row has been selected and we transform in inputs this row
              mysector.id === editId ? (
                <tr
                  key={mysector.id}
                  className="bg-white border-b  border-gray-700 hover:bg-gray-50"
                >
                  <td>{mysector.id}</td>
                  <td>
                    <input
                      type="text"
                      value={libelle}
                      onChange={(e) => setSector(e.target.value)}
                    />
                  </td>
                  <td className="flex space-x-3">
                    <button
                      onClick={handleUpdate}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                    >
                      Update
                    </button>
                    <button
                      onClick={cancelUpdate}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-1 border border-red-700 rounded "
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                // Otherwise we just show the datas without inputs
                <tr
                  key={mysector.id}
                  className="bg-white border-b  border-gray-700 hover:bg-gray-50"
                >
                  <td>{mysector.id}</td>
                  <td>{mysector.libelle}</td>
                  <td className="flex space-x-3">
                    <button
                      onClick={() => handleEdit(mysector.id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(mysector.id)}
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
                <th>Libelle</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setSector(e.target.value)}
                  />
                </td>
                <td className="flex space-x-3">
                  <button
                    onClick={handleAdd}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded"
                  >
                    Submit
                  </button>
                  <button
                    onClick={cancelAdd}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-700 rounded "
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
