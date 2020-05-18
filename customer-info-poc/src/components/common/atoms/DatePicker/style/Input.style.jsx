import { css } from "styled-components";

export default css`
  .error-container {
    background-color: #fff4e9;
    color: black;
    padding: 15px;
    font-size: 18px;
  }

  input {
    border: 1px solid #d8d8d8;
    background-color: white;
    color: #d8d8d8;
    font-size: 18px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  input:focus {
    border: 1px solid orange;
    outline-style: none;
    color: black;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
`;
