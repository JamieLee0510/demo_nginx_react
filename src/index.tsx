import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Demo from "./pages/Demo/Demo";
import Home from "./pages/Home";
import Snyc from "./pages/Snyc";
import DrapList from "./pages/DrapList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="demo" element={<Demo />} />
        <Route path="sync" element={<Snyc />} />
        <Route path="drapAble" element={<DrapList />} />
        {/* <Route path="/kaza" element={<Navigate to="/" replace />} />
      <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
