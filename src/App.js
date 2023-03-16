import "./App.css";
import Appbar from "./components/navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
