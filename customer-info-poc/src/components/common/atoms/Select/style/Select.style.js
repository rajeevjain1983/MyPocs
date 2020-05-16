import { css } from "styled-components";

export default css`
  .error-container {
    background-color: #fff4e9;
    color: black;
    padding: 15px;
    font-size: 18px;
  }

  select {
    border: 1px solid #d8d8d8;
    background-color: white;
    border-radius: 0px;
    outline: 0px;
    padding: 10px;
    width: 100%;
    outline-style: none;
    appearance: none;
    color: #d8d8d8;
    font-size: 18px;
    background: url(/carrot-small-down.png) right 5px bottom 15px no-repeat;
  }
  select:focus {
    border: 1px solid orange;
    outline-style: none;
    color: black;
  }
`;
