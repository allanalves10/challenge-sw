import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import { GlobalStyles } from './styles/global';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
