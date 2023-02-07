import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/register";
import Login from "./pages/login";
import Index from "./pages/Index";
import MovieAdd from "./pages/mov_add";
import Test from "./pages/test";
import MovieIndex from "./pages/mov_index";
import CusIndex from "./pages/cus_index";

import Indexs from "./pages/indexs";
import MovieEdit from "./pages/mov_edit";
import MovieView from "./pages/mov_view";
import AboutUs from "./pages/about_us";


// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/index" element={<Index />}>
        </Route>
        <Route path="/mov_add" element={<MovieAdd />}> </Route>
        <Route path="/test" element={<Test />}>

        </Route>
        <Route path="/mov_index" element={<MovieIndex />} />
        <Route path="/cus_index" element={<CusIndex />} />

        <Route path="/indexs" element={<Indexs />} />
        <Route path="/mov_edit" element={<MovieEdit />} />
        <Route path="/mov_view" element={<MovieView />} />
        <Route path="/about_us" element={<AboutUs />} />


      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));