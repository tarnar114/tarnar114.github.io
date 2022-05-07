import { ChakraProvider} from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Theme from "./components/theme";
import '@fontsource/raleway/300.css'
import '@fontsource/m-plus-rounded-1c/500.css'
import Router from "./components/Router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ChakraProvider theme={Theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
  </BrowserRouter>
);
