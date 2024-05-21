import { useState } from "react";
import { useAuthStore } from "../store/auth";
import  useAxios  from "../utils/useAxios";
import useProfileUpdater from "../utils/profile";
import logout from "../components/assets/icons/logout.svg";
import search from "../components/assets/icons/search-normal.svg";

function UserNavbar() {
  let [isSearching, setIsSearching] = useState(false);
  const api = useAxios();

  const user = useAuthStore((state) => state.user()); 
  const cancelSubscription = async () => {
    try {
      const response = await api.post("unsubscribe/");
      alert(response.data.detail);
      navigate("/courses");
    } catch (error) {
      console.error("Error unsubscribing:", error);
      alert("Failed to unsubscribe. Please try again.");
    }
  };

  const handleButtonClick = user?.paid ? cancelSubscription : null;
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
        <section className="grid gap-4 md:order-2 ">
          <button
            className="w-20 h-10 text-grey-15 rounded-regular bg-abs-white border border-white-97"
            onClick={handleButtonClick}
          >
            {user?.paid ? " Cancel Subscription" : "Subscribe Now"}
          </button>
          <p className="font-medium text-grey-40 text-lg">
            Welcome, {user.first_name} {user.last_name}
          </p>
          <p className="text-sm text-grey-60">Have a good day</p>
        </section>
      )}
      {/* <figure>
        <img src={logout} alt="logout" />
      </figure> */}
    </>
  );
}

export default UserNavbar;
