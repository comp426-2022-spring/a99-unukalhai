import React from "react";
import data from "../../data/data";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

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
      <Header />
      <main>
        {cards}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;