import axios from "axios";
import { useState, useEffect } from "react";

export default function Profil() {
  const token = localStorage.getItem("token");
  let parsedToken = JSON.parse(token);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
    id_type: "",
    created_at: "",
  });
  const [typeData, setTypeData] = useState([]);
  const type = typeData.map((item) => item.type);
  const type_id = typeData.map((item) => item.id);
  const [update, setUpdate] = useState(0);
  let id = 0;

  // GET DATA FROM CONNECTED USER WITH THE TOKEN
  useEffect(() => {
    setUserData(parsedToken);
  }, []);

  useEffect(() => {
    // RETRIEVE TYPE TABLE DATA
    axios
      .get("http://localhost:8000/api/type")
      .then((rep) => {
        setTypeData(rep.data.types);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleUpdate = () => {
    console.log(userData.id_type);
    // SEND REQUEST TO API TO UPDATE PEOPLE
    axios
      .put("http://localhost:8000/api/people/" + userData.id + "/edit", {
        id: userData.id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        email: userData.email,
        password: userData.password,
        phone_number: userData.phone_number,
        address: userData.address,
        id_type: userData.id_type,
        created_at: userData.created_at,
        isAdmin: false,
      })
      .then(() => {
        // RETRIEVE OBJECT DATA AND PUT IT IN STRING FOR THE TOKEN
        let toToken = JSON.stringify(userData);
        localStorage.setItem("token", toToken);
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    setUpdate(1);
  };

  const handleCancel = () => {
    setUpdate(0);
  };

  const handleDelete = (id) => {
    if (confirm("Do you really want to delete your account ?")) {
      axios
        .delete("http://localhost:8000/api/people/" + id + "/delete")
        .then(() => {
          localStorage.removeItem("token");
          window.location.href = "http://localhost:3000/";
        })
        .catch((error) => {
          console.error("Error axios", error);
        });
    } else {
      alert("Deletion cancelled");
    }
  };

  // TO DISPLAY THE TEXT ASSOCIATED WITH THE TYPE ID
  for (let i = 0; i < type.length; i++) {
    if (userData.id_type === type_id[i]) id = i;
  }

  if (userData.length !== 0) {
    return (
      <main className="flex flex-col h-full w-full">
        <div className="w-3/4 mx-auto my-20">
          <h1 className="text-3xl font-bold mb-4">Profil</h1>
          <table className="w-full text-left text-gray-500 mb-4">
            <thead className="text-gray-700 uppercase bg-gray-50">
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {update !== 0 ? (
                <>
                  <tr className="bg-white border-b  border-gray-700 hover:bg-gray-50 ">
                    <th>First name</th>
                    <td>
                      <input
                        type="text"
                        value={userData.firstname}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            firstname: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-700 hover:bg-gray-100">
                    <th>Last name</th>
                    <td>
                      <input
                        type="text"
                        value={userData.lastname}
                        onChange={(e) =>
                          setUserData({ ...userData, lastname: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-700 hover:bg-gray-100">
                    <th>Email</th>
                    <td>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-700 hover:bg-gray-100">
                    <th>Password</th>
                    <td>
                      <input
                        type="text"
                        value={userData.password}
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-700 hover:bg-gray-100">
                    <th>Phone number</th>
                    <td>
                      <input
                        type="text"
                        value={userData.phone_number}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            phone_number: e.target.value,
                          })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-700 hover:bg-gray-100">
                    <th>Address</th>
                    <td>
                      <input
                        type="text"
                        value={userData.address}
                        onChange={(e) =>
                          setUserData({ ...userData, address: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-700 hover:bg-gray-100">
                    <th>Type</th>
                    <td>
                      <input
                        type="number"
                        value={userData.id_type}
                        onChange={(e) =>
                          setUserData({ ...userData, id_type: e.target.value })
                        }
                      />
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-gray-700 hover:bg-gray-100">
                    <th>Action</th>
                    <td>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 m-1 border border-green-500 rounded "
                        onClick={handleUpdate}
                      >
                        update
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 m-1 border border-red-700 rounded "
                        onClick={handleCancel}
                      >
                        cancel
                      </button>
                    </td>
                  </tr>
                </>
              ) : (
                <>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>First name</th>
                    <td>{userData.firstname}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>Last name</th>
                    <td>{userData.lastname}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>Email</th>
                    <td>{userData.email}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>Password</th>
                    <td>{userData.password}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>Phone number</th>
                    <td>{userData.phone_number}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>Address</th>
                    <td>{userData.address}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>Type</th>
                    <td>{type[id]}</td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-100">
                    <th>Created at</th>
                    <td>{userData.created_at}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-500 rounded mx-2 "
            onClick={() => handleEdit(userData.id)}
          >
            edit
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white  font-bold py-1 px-2 border border-red-700 rounded mx-2"
            onClick={() => handleDelete(userData.id)}
          >
            delete account
          </button>
        </div>
      </main>
    );
  }
}
