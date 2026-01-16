import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Blogs from "./sections/Blogs";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import SingleBlogPage from "./assets/SingleBlogPage";
import Register from "./sections/Register";
import Login from "./sections/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateBlogPage from "./components/CreateBlog";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      {/* Helper runs on every route change */}
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SingleBlogPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/blogs/create" element={<CreateBlogPage />} />
          </Route>
          <Route path="*" element={<div className="p-10 text-center">404 - Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
