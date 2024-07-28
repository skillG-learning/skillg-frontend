import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Programs from "./components/Programs";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";

function App()
{

  return(
    <div className="App">
      <Header />
      <LandingPage />
      <Programs />
      <Benefits />
      <Gallery />
      <Projects />
    </div>
  )
};


export default App;