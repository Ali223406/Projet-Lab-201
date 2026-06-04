import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Album from "./pages/Album";
import Tour from "./pages/Tour";
import Blog from "./pages/Blog";
import Artist from "./pages/Artist";
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Subscribe from "./pages/Subscribe";
import Cle from "./pages/cle";
import Footer from "./pages/Footer";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

import "./App.css";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <div className="app-layout">

          <Routes>

            {/*  SITE PUBLIC */}
            <Route path="/" element={<Home />} />
            <Route path="/album" element={<Album />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/article-1" element={<Article1 />} />
            <Route path="/article-2" element={<Article2 />} />
            
            <Route path="/cle" element={<Cle />} />
            <Route path="/subscribe" element={<Subscribe />} />
            {/*  AUTH */}
            <Route path="/login" element={<Login />} />

            {/*  ADMIN DASHBOARD */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/*  ADMIN CRUD */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />

          </Routes>

          {/* FOOTER GLOBAL */}
          <Footer />

        </div>

      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;