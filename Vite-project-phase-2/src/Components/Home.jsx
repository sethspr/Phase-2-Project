import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Home() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
      </main>
    </>
  );
};

export default Home;