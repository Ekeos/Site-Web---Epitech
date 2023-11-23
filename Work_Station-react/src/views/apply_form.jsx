import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// csrf token index.html
const csrftoken = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content");
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrftoken;

export default function Applyform() {

  let id = useParams();
  const date = moment().format("YYYY-MM-DD HH:mm:ss");

  // If the user is connected or not
  if (localStorage.getItem("token") != null) {
    const myuser = JSON.parse(localStorage.getItem("token"));
    console.log(myuser);
    const [inputErrorList, setInputErrorList] = useState({});
    const [mypostulate, SetMyPostulate] = useState({
      firstname: "",
      lastname: "",
      phone_number: "",
      email: "",
    });

    const handleInput = (e) => {
      e.persist();
      SetMyPostulate({ ...mypostulate, [e.target.name]: e.target.value });
    };

    const savepostulate = (e) => {
      e.preventDefault();

      axios
        .post("http://localhost:8000/api/postulate", {
          id_ad: id.id,
          id_people: myuser.id,
          date: date,
        })
        .then((res) => {
          alert(res.data.message);
          window.location.href = "http://localhost:3000/";
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response === 422) {
              setInputErrorList(error.response.data.errors);
            }

            if (error.response === 500) {
              alert(error.response.data.errors);
            }
          }
        });
    };

    return (
      <div className="h-screen flex items-center justify-center mb-auto">
        <div className="lg:w-1/2">
          <p className="flex justify-center text-4xl mb-5">Postulate form</p>
          <form className="space-y-4" method="POST" onSubmit={savepostulate}>
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
                  value={myuser.firstname}
                  onChange={handleInput}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="text-danger">{inputErrorList.firstname}</span>
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
                  value={myuser.lastname}
                  onChange={handleInput}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="text-danger">{inputErrorList.lastname}</span>
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
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  value={myuser.phone_number}
                  onChange={handleInput}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="text-danger">
                  {inputErrorList.phone_number}
                </span>
              </div>
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
                  value={myuser.email}
                  onChange={handleInput}
                  required
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <span className="text-danger">{inputErrorList.email}</span>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Postulate
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    // If the user isn't connected we redirect in signup page
    window.location.href = "http://localhost:3000/auth/signup";
  }
}
