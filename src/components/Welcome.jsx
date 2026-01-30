import React from "react";
import "../css/welcome.css";

const Welcome = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">PelliPattuCollections</div>
        {/* <nav className="nav">
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav> */}
      </header>

      {/* Main Section */}
      <main className="main">
        <h1 className="title">Welcome to PelliPattu Collections</h1>
        <p className="subtitle">
          Elegant Sarees • Timeless Designs • Handpicked Collections
        </p>
      </main>
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#collections">Collections</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Welcome;
