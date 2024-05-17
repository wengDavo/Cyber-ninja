import { useState } from "react";
import logout from "../components/assets/icons/logout.svg";
import search from "../components/assets/icons/search-normal.svg";

function UserNavbar() {
  let [isSearching, setIsSearching] = useState(false);
  return (
    <>
      <form action="" className="grow">
        <div className="flex">
          <img
            src={search}
            alt="search"
            onClick={() => setIsSearching(!isSearching)}
          />
          {isSearching && (
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              className="grow outline-none border border-white-90 rounded-regular mx-2 px-2"
            />
          )}
        </div>
      </form>
      {isSearching || (
        <section className="">
          <p className="font-medium text-grey-40 text-lg">Welcome, Davo</p>
          <p className="text-sm text-grey-60">Have a good day</p>
        </section>
      )}
      <figure>
        <img src={logout} alt="logout" />
      </figure>
    </>
  );
}

export default UserNavbar;
