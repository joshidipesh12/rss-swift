import React, { useEffect, useState } from "react";
import Layout from "../../Layouts/Layout";

function Home() {
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}></main>
  );
}

Home.Layout = Layout;

export default Home;
