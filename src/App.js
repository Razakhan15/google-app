import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./components/SearchPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
