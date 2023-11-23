import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const csrftoken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrftoken;

export default function Signup() {
  const [typeData, setTypeData] = useState([]);
  const typeName = typeData.map((item) => item.type);
  const type_id = typeData.map((item) => item.id);

  const date = moment().format("YYYY-MM-DD HH:mm:ss");
  const [inputErrorList, setInputErrorList] = useState({});
  const [mysignup, SetMySignup] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    type: "1",
  });

  const handleInput = (e) => {
    e.persist();
    SetMySignup({ ...mysignup, [e.target.name]: e.target.value });
  };

  const saveregister = (e) => {
    e.preventDefault();

    const data = {
      firstname: mysignup.firstname,
      lastname: mysignup.lastname,
      phone_number: mysignup.phone,
      email: mysignup.email,
      id_type: mysignup.type,
      password: mysignup.password,
      address: mysignup.address,
      created_at: date,
      isAdmin: false,
    };

    // SEND DATA TO API TO CREATE PEOPLE
    axios
      .post("http://localhost:8000/api/people", data)
      .then((res) => {
        alert(res.data.message);
        window.location.href = "http://localhost:3000/";
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response === 422) {
            setInputErrorList(error.response.data.errors);
          }
          if (error.response.status === 500) {
            alert("Email already used in database");
          }
        }
        console.log(error);
      });
  };

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

  return (
    <div className="h-screen flex items-center justify-center mb-auto">
      <div className="lg:w-1/2">
        <form className="space-y-4" method="POST" onSubmit={saveregister}>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name:
            </label>
            <div className="mt-2">
              <input
                id="firstname"
                name="firstname"
                type="text"
                value={mysignup.firstname}
                onChange={handleInput}
                required
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name:
            </label>
            <div className="mt-2">
              <input
                id="lastname"
                name="lastname"
                type="text"
                value={mysignup.lastname}
                onChange={handleInput}
                required
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address:
            </label>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                value={mysignup.address}
                onChange={handleInput}
                required
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone number:
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                value={mysignup.phone}
                onChange={handleInput}
                required
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-2">
            <label
              htmlFor="type"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Type:
            </label>
            <select
              id="dropdown"
              value={mysignup.type}
              onChange={handleInput}
              name="type"
              required
            >
              {typeData.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email:
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={mysignup.email}
                onChange={handleInput}
                required
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={mysignup.password}
                onChange={handleInput}
                required
                className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Signup
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member? <span></span>
          <Link
            to="/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
