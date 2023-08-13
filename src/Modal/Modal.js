import "../LoanForm/FormStyles.css";

export default function Modal({ isVisible, errorMessage }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage
              ? errorMessage
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else return <></>;
}
// The Form Has Been Submitted Successfully
