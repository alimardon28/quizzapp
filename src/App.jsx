import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Tests from "./Pages/Tests/Tests";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tests" element={<Tests />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
