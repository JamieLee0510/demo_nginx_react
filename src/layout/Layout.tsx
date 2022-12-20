import React from "react";

import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // useEffect(() => {
  //   console.log("render layout");
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li>
            <Link to="/sync">Sync</Link>
          </li>
          {/* <li>
            <Link to="/drapAble">Drap Able</Link>
          </li> */}
        </ul>
        {children}
      </header>
    </div>
  );
}
