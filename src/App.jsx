import './App.css';
import AppRoutes from "./router";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:401";
axios.defaults.baseURL = "https://skillg-backend.onrender.com";
axios.defaults.withCredentials = true;
const App = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}
export default App;