import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // How to create a React app: npm create vite@latest {app-name} -- --template react
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleContactChange(event) {
    // what the user typed
    const val = event.target.value;
    // name of the input element that triggered this function (fName, lName, or email)
    const inputName = event.target.name;

    setContact((prevValue) => {
      console.log(
        "handleContactChange(): setContact(): prevValue = ",
        prevValue
      );
      if (inputName === "fName") {
        // return a new object that has the previous values for lName & email but the new value for the fName
        return {
          fName: val,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (inputName === "lName") {
        // return a new object that has the previous values for fName & email but the new value for the lName
        return {
          fName: prevValue.fName,
          lName: val,
          email: prevValue.email,
        };
      } else if (inputName === "email") {
        // return a new object that has the previous values for fName & lName but the new value for the email
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: val,
        };
      }
    });
  }

  return (
    <>
      <div className="container">
        <h1>
          Hello {contact.fName} {contact.lName}
        </h1>
        <p>{contact.email}</p>
        <form>
          <input
            onChange={handleContactChange}
            name="fName"
            placeholder="First Name"
          />
          <input
            onChange={handleContactChange}
            name="lName"
            placeholder="Last Name"
          />
          <input
            onChange={handleContactChange}
            name="email"
            placeholder="Email"
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
