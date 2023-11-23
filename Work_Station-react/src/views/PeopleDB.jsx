import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PeopleDB() {
  const [data, setData] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [id_type, setIDType] = useState("");
  const [isAdmin, setAdmin] = useState();
  const [editId, setEditID] = useState(-1);
  const [test_button_add, setButtonAdd] = useState(false);
  const [cancel, setCancel] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/people")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error axios", error);
      });
  }, []);

  const handleEdit = (id) => {
    setEditID(id);
    axios.get("http://localhost:8000/api/people/" + id).then((response) => {
      setCancel(true);
      setFirstname(response.data.message.firstname);
      setLastname(response.data.message.lastname);
      setEmail(response.data.message.email);
      setPhonenumber(response.data.message.phone_number);
      setAddress(response.data.message.address);
      setAdmin(response.data.message.isAdmin);
      setIDType(response.data.message.id_type);
      setPassword(response.data.message.password);
    });
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/people/" + id + "/delete")
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.error("Error axios", error);
      });
  };

  const handleUpdate = () => {
    axios
      .get("http://localhost:8000/api/companies/" + id_type)
      .then((res) => {
        console.log("ok");
      })
      .catch((err) => alert("Id type doesn't exist in the table Type"));

    axios
      .put("http://localhost:8000/api/people/" + editId + "/edit", {
        id: editId,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone_number: phone,
        address: address,
        isAdmin: isAdmin,
        id_type: id_type,
        password: password,
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
    axios
      .get("http://localhost:8000/api/type/" + id_type)
      .then((res) => {})
      .catch((err) => alert("Id type doesn't exist in the table Type"));

    axios
      .post("http://localhost:8000/api/people", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        id_type: id_type,
        address: address,
        phone_number: phone,
        created_at: date,
        isAdmin: isAdmin,
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
        {test_button_add === true ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50">
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>Phone number</th>
                <th>Created At</th>
                <th>ID Type</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    className="w-2/3"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="tel"
                    className="w-2/3"
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    className="w-4/5"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => setIDType(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/5"
                    onChange={(e) => setAdmin(e.target.value)}
                  />
                </td>
                <td>
                  <button
                    onClick={handleAdd}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 ml-1 mb-2 border border-green-500 rounded"
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
          <></>
        )}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr className="bg-white border-b border-gray-700 hover:bg-gray-50 ">
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone number</th>
              <th>Address</th>
              <th>ID Type</th>
              <th>isAdmin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.peoples.map((users) =>
              users.id === editId && cancel === true ? (
                <tr
                  key={users.id}
                  className="bg-white border-b  border-gray-700 hover:bg-gray-50 "
                >
                  <td>{users.id}</td>
                  <td>
                    <input
                      type="text"
                      className="w-2/3"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-2/3"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      className="w-2/3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-2/3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      className="w-2/3"
                      value={phone}
                      onChange={(e) => setPhonenumber(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="w-2/3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="w-2/5"
                      value={id_type}
                      onChange={(e) => setIDType(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="w-2/5"
                      value={isAdmin}
                      onChange={(e) => setAdmin(e.target.value)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={handleUpdate}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 m-1 border border-grebe-500 rounded "
                    >
                      Update
                    </button>
                    <button
                      onClick={cancelUpdate}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-1 m-1 border border-red-700 rounded "
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr
                  key={users.id}
                  className="bg-white border-b  border-gray-700 hover:bg-gray-50 "
                >
                  <td>{users.id}</td>
                  <td>{users.firstname}</td>
                  <td>{users.lastname}</td>
                  <td>{users.email}</td>
                  <td>{users.password}</td>
                  <td>{users.phone_number}</td>
                  <td>{users.address}</td>
                  <td>{users.id_type}</td>
                  <td>{users.isAdmin}</td>
                  <td className="flex space-x-3">
                    <button
                      onClick={() => handleEdit(users.id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded "
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(users.id)}
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
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>Phone number</th>
                <th>Created At</th>
                <th>ID Type</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    className="w-2/3"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/3"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="tel"
                    className="w-2/3"
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    className="w-3/4"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="w-2/5"
                    onChange={(e) => setIDType(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="w-2/5"
                    onChange={(e) => setAdmin(e.target.value)}
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
          <div className="flex flex-row h-full items-center justify-center text-5xl">
            No data yet
          </div>
        )}
      </div>
    );
  }
}
