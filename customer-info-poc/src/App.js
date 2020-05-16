import React from "react";
import { Provider } from "react-redux";
import Header from "./components/features/content/Header";
import CustomerDetail from "./components/features/Customer";

import GlobalStyle from "./styles/globalStyles";
import configureStore from "./reduxStore/store";

function App() {
  return (
    <Provider store={configureStore}>
      <GlobalStyle />
      <title>Customer Detail</title>
      <Header />
      <CustomerDetail onSubmit={() => {}} />
    </Provider>
  );

  // <div className="App">MY POC</div>;
}

export default App;
