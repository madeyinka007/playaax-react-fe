import { Route, Routes } from "react-router-dom";

import Public from "./Routes/Public";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Blogdetails from "./Pages/Blogdetails";
import Category from "./Pages/Category";
import MainDashboardLayout from "./components/layout/MainDashboardLayout";
import Dashboard from "./components/layout/Dashboard";
import Posts from "./Pages/Admin/Posts";
import CreatePost from "./Pages/Admin/CreatePost";
import Categories from "./Pages/Admin/Categories";
import Authors from "./Pages/Admin/Authors";

function App() {
  return (
    <>
      <Routes>
        {/* Routes for the public pages */}

        <Route element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog-details" element={<Blogdetails />} />

          <Route path="/category" element={<Category />} />
        </Route>

        <Route path="admin" element={<MainDashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="posts" element={<Posts />}></Route>

          <Route path="posts/create" element={<CreatePost />}></Route>
          <Route path="category" element={<Categories />}></Route>
          <Route path="author" element={<Authors />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
