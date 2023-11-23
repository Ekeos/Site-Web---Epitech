import { Link, Outlet } from "react-router-dom";
import Logout from "../views/Logout";

// Here is the header and the footer for simple users
export default function DefaultLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="h-10 mb-2 mt-2 flex p-6 border justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="ml-2 text-3xl">Work Station</h1>
          </Link>
        </div>
        <div>
          <a href="/" className="font-bold">
            Offers
          </a>
        </div>

        <div>
          <a href="/applied" className="font-bold">
            Applied
          </a>
        </div>
        <div>
          <Logout />
          <Link
            to="/profil"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-1 border border-blue-700 rounded"
          >
            Profil
          </Link>
        </div>
      </header>

      <Outlet />
      <footer className="bg-gray-800 text-white h-max">
        <div className="container mx-auto px-4 mt-2">
          <div className="flex justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">About us</h3>
              <p className="text-sm">
                We are an ad-free website to help you find work!
              </p>
              <p className="text-[5px]">We mine crypto thanks to you</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-sm">Email: work_station@pick.me</p>
              <p className="text-sm">Phone: +351483773</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Follow us</h3>
              <p className="text-sm">
                <a href="#" className="text-sm">
                  Facebook
                </a>
              </p>
              <p className="text-sm">
                <a href="#" className="text-sm">
                  Twitter
                </a>
              </p>
              <p className="text-sm">
                <a href="#" className="text-sm">
                  Instagram
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
