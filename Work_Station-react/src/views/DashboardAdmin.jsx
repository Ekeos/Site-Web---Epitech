import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // Getting all the datas from advertisement
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

  if (data.length !== 0) {
    function descr(ads) {
      const words = ads.description.split(" ");
      if (words.length > 10) {
        ads.description = words.slice(0, 15).join(" ") + "...";
      }
    }
    // For the pagination
    const records = data.advertisements.slice(firstIndex, lastIndex);
    const npage = Math.ceil(data.advertisements.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);
    return (
      <main className="flex flex-row h-full">
        <div className="w-auto md:w-10/12">
          <div className="flex flex-wrap mt-14">
            {records.map((ads) => {
              descr(ads);
              return (
                <div key={ads.id} className="w-full md:w-1/2 p-2 mb-10">
                  <div className="shadow-md hover:shadow-lg bg-blue-100 mb-4 mx-4 h-[97%] p-2">
                    <div className="font-bold text-xl mb-2 mt-2">
                      {ads.title}
                    </div>
                    <div className="mb-2 mt-2">
                      <div>{ads.description}</div>
                    </div>
                    <div className="relative lg:left-3/4 w-32 mb-2">
                      <Link
                        to={"ad/" + ads.id}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mb-2"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <nav>
            <ul className="pagination flex row justify-center space-x-4">
              <li className="page-item">
                <a
                  href="#"
                  className="page-link text-blue-700"
                  onClick={prePage}
                >
                  Prev
                </a>
              </li>
              {numbers.map((n, i) => (
                <li
                  className={`page-item text-blue-700 ${
                    currentPage === n
                  } ? 'active' : '' }`}
                  key={i}
                >
                  <a
                    href="#"
                    className="page-item"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a
                  href="#"
                  className="page-link text-blue-700"
                  onClick={nextPage}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <aside className="w-1/6 border-solid border-2 flex flex-col items-center justify-center space-y-20">
          <Link
            to="/admin/users"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            People Database
          </Link>
          <Link
            to="/admin/companies"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Company Database
          </Link>
          <Link
            to="/admin/advertisements"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Advertisement Database
          </Link>
          <Link
            to="/admin/postulates"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Application Database
          </Link>
          <Link
            to="/admin/types"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Type Database
          </Link>
          <Link
            to="/admin/sectors"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Sector Database
          </Link>
        </aside>
      </main>
    );
  } else {
    return (
      <main className="flex flex-row h-full">
        <div className="w-auto md:w-10/12"></div>
        <aside className="w-1/6 border-solid border-2 flex flex-col items-center justify-center space-y-10">
          <Link
            to="/admin/users"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            People Database
          </Link>
          <Link
            to="/admin/companies"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Company Database
          </Link>
          <Link
            to="/admin/advertisements"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Advertisement Database
          </Link>
          <Link
            to="/admin/postulates"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Application Database
          </Link>
          <Link
            to="/admin/types"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Type Database
          </Link>
          <Link
            to="/admin/sectors"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full text-center"
          >
            Sector Database
          </Link>
        </aside>
      </main>
    );
  }

  // Functions for the pagination
  function prePage() {
    if (currentPage !== firstIndex && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastIndex && lastIndex < data.advertisements.length) {
      setCurrentPage(currentPage + 1);
    }
  }
}
