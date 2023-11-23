import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  // Getting all the datas from advertisement
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/advertisement")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (data.length !== 0) {
    // SHOW ONLY FIRST FEW WORDS OF THE DESCRIPTION
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
      <main className="flex flex-col md:flex-row h-full">
        <div className="w-auto md:w-full">
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
      </main>
    );
  } else {
    return (
      <main className="flex flex-col h-full items-center justify-center text-5xl">
        No data yet
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
