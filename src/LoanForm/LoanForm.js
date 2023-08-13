import "./FormStyles.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
export default function LoanForm() {
  const [loanInputs, SetLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  const [showModal, SetShowModal] = useState(false);
  const [errorMessgae, SetErrorMessgae] = useState(null);

  // Handle Form Clicked
  function handleForm(event) {
    event.preventDefault();
    const { age, phoneNumber } = loanInputs;
    if (age > 100 || age < 18) {
      SetErrorMessgae("The age isn't allowed");
    } else if (phoneNumber.length > 12 || phoneNumber.length < 6) {
      SetErrorMessgae("Phone Number Format Is Incorrect");
      console.log("hello");
    }
    SetShowModal(true);
  }
  function handleDiv() {
    if (showModal) {
      SetShowModal(false);
    }
  }
  // Disabled Btn Condition
  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "";
  //  return Component
  return (
    <div
      onClick={handleDiv}
      className="flex"
      style={{ height: "100vh", flexDirection: "column" }}
    >
      <form
        className="flex"
        style={{ flexDirection: "column", alignItems: "flex-start" }}
      >
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(e) => {
            SetLoanInputs({ ...loanInputs, name: e.target.value });
          }}
        />

        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(e) => {
            SetLoanInputs({ ...loanInputs, phoneNumber: e.target.value });
          }}
        />

        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(e) => {
            SetLoanInputs({ ...loanInputs, age: e.target.value });
          }}
        />

        <div className="flex" style={{ marginTop: "10px" }}>
          <label style={{ marginTop: "0", marginRight: "10px" }}>
            Are You an employee ?
          </label>
          <input
            type="checkbox"
            checked={loanInputs.isEmployee}
            onChange={(e) => {
              SetLoanInputs({ ...loanInputs, isEmployee: e.target.checked });
            }}
          />
        </div>

        <label>Salary:</label>
        <select
          value={loanInputs.salary}
          onChange={(e) => {
            SetLoanInputs({ ...loanInputs, salary: e.target.value });
          }}
        >
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>

        <button
          className={btnIsDisabled ? "disabled" : ""}
          disabled={btnIsDisabled}
          onClick={handleForm}
          id="btn-submit"
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModal} errorMessage={errorMessgae} />
    </div>
  );
}
