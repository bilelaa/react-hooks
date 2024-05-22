import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Myprovider } from "./context/Mycontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <Myprovider>
      <App />
    </Myprovider>
  </ChakraProvider>
);
