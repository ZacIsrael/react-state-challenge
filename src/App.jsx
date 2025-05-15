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

  // simplified version of handleContactChange using the spread operator & object detsructuring
  function handleContactChange(event) {
    // Object detsructuring
    // value is what the user typed, name is the input element that triggered this function (fName, lName, or email)
    const { value, name } = event.target;
    /*
    Update the "contact" state by creating a new object. Here's how it works step by step:
    
    1. `setContact` is a React state updater function that replaces the old contact object with a new one.
    
    2. We pass it an arrow function: `prev => ({ ...prev, [name]: value })`
       - `prev` represents the previous state (the old contact object).
    
    3. `{ ...prev }` is using the **spread operator**.
       - This creates a **new object** and copies all key-value pairs from `prev` into it.
       - For example, if `prev` is:
         { fName: "John", lName: "Doe", email: "john@example.com" }
         Then `{ ...prev }` becomes a fresh object with the same content.
    
    4. `[name]: value` is a **computed property name**.
       - `name` comes from the input element's `name` attribute (e.g., "fName", "lName", or "email").
       - This line tells JavaScript: "Set the property with this name to the new value."
       - So if `name` is "email" and `value` is "new@example.com", the result is:
         { ...prev, email: "new@example.com" }
    
    5. If the key already exists (e.g., "email"), it will be **overwritten** with the new value.
    
    The final result is a new contact object with just one field updated,
    while the rest of the data stays the same.
    */
    setContact((prev) => ({ ...prev, [name]: value }));
  }

  /*
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
    
  */

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
