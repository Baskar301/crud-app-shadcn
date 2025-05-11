import { ThemeProvider } from "./components/ui/ThemeProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from './Navbar'
// import Home from "./Home"
// import AddUser from './Adduser'
// import UpdateUser from './UpdateUser'
import { Toaster } from "sonner";
/*--------------------------------------------*/
import { useState } from "react";
import Navbar from "../netflixwannabe/Navbar";
import MoviesHome from "../netflixwannabe/MoviesHome";
import HeroSwiper from "../netflixwannabe/HeroSwiper";
import MovieInfo from "../netflixwannabe/MovieInfo";
import Favorites from "../netflixwannabe/Favorites";
import Footer from "../netflixwannabe/Footer";
import ScrollToTopBtn from "../netflixwannabe/ScrollToTopBtn";

function App() {
  const [query, setQuery] = useState("");

  return (
    <ThemeProvider>
      <Router>
        {/* <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/adduser" element={<AddUser/>}/>
          <Route path="/updateuser/:id" element={<UpdateUser />} />
        </Routes>
        <Toaster position="top-center" richColors/> */}
        <ScrollToTopBtn />
        <Navbar query={query} setQuery={setQuery} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {!query.trim() && <HeroSwiper />}
                <MoviesHome query={query} />
              </>
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
