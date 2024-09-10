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
import EditPost from "./Pages/Admin/EditPost";
import CategoryBlock from "./Pages/CategoryBlock";

function App() {
  return (
    <>
      <Routes>
        {/* Routes for the public pages */}

        <Route element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:_id" element={<Blogdetails />} />

          <Route path="/category/:slug" element={<CategoryBlock />} />
          <Route path="/category-1" element={<Category />} />
        </Route>

        <Route path="admin" element={<MainDashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="posts" element={<Posts />}></Route>

          <Route path="posts/create" element={<CreatePost />}></Route>
          <Route path="posts/update/:_id" element={<EditPost />} />
          <Route path="category" element={<Categories />}></Route>
          <Route path="author" element={<Authors />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
