import "./App.css";
// import Appbar from "./components/navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./home";
// import Footer from "./components/footer";
import Service from "./service";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootlayouts from "./layouts/rootlayout";
import Contact from "./contact";
import About from "./about";
import Booking from "./booking";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayouts />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="booking" element={<Booking />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
