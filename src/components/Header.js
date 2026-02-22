import { lazy, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //if we did not declare dependency array then it act as componentDidMount + componentDidUpdate , it calls after every render
  //if we use useEffect with empty dependency array then it act as componentDidMount , it calls only once after initial render
  //if we pass variable in dependency array then it act as componentDidUpdate for that variable , it call on every change of that variable
  // useEffect(() => {
  //   console.log("Header component mounted");
  // }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 ">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-56" alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
//default export
export default Header;
