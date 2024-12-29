import Navbar from "./components/navbar";
import './App.css';
import LandingPage from "./views/landingPage";
import AllCourses from "./views/courses";
import AddonFeatures from "./views/feature"
import Gallery from "./views/gallery";
import BlogSlider from "./views/blogs";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <AllCourses />
      <AddonFeatures />
      <Gallery />
      <BlogSlider />
      <Footer />
    </div>
  )
}
export default App;