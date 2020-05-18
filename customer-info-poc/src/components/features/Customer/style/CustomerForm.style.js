import { css } from "styled-components";

export default css`
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  overflow: scroll;

  .field-container {
    margin: 30px 0;
  }

  .field-container > label {
    font-size: 18px;
    font-weight: bold;
  }
  .field {
    margin-top: 5px;
    @media (min-width: 768px) {
      width: 80%;
    }
  }
  .btn-Container {
    display: flex;
    @media (min-width: 768px) {
      width: 80%;
    }
  }
  .radio-container {
    width: 100%;
    input[type="radio"] {
      margin: 10px 10px 10px 5px;
    }
  }

  .btnCancel {
    margin-left: 5px;
  }
  .error-container {
    background-color: #fff4e9;
    color: black;
    padding: 15px;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;
