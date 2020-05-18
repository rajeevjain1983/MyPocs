import { css } from "styled-components";

export default css`
  .radioContainer {
    display: flex;
  }

  /* The container */
  .radioLabel {
    margin-bottom: 0px;
    display: block;
    position: relative;
    padding: 5px 15px 5px 35px;
    cursor: pointer;
    font-size: 18px;
  }

  /* Hide the browser's default radio button */
  .radioLabel input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 3px;
    left: 0;
    height: 30px;
    width: 30px;
    border: 1px solid #d8d8d8;
    border-radius: 50%;
  }

  /* On mouse-over, add a grey background color */
  .radioLabel:hover input ~ .checkmark {
    background-color: #ccc;
  }

  /* When the radio button is checked, add a blue background */
  .radioLabel input:checked ~ .checkmark {
    background-color: rgb(0, 48, 87);
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .radioLabel input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .radioLabel .checkmark:after {
    top: 9px;
    left: 9px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
  }
`;
