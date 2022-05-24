import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import NavBar from "./NavBar";
import Student from "./Student";
import './style.css'


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Student" element={<Student/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
