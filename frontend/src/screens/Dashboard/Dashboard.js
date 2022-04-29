import React from "react";
import data from "./data/data";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

const cards = data.map(item => {
  return (
    <Card 
      key={item.id}
      {...item}
    />
  )
})


const Dashboard = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        {cards}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;