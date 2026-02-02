import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import "./custom.css";
import { HashRouter, Route, BrowserRouter, Routes } from "react-router-dom";
import  LandingPage  from "./pages/LandingPage";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
