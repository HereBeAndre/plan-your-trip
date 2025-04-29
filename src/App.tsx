import React from "react";
import { Banner } from "./components/Banner";
import { Search } from "./components/Search";
import { Results } from "./components/Results";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Banner />
      <Search />
      <Results />
      <Footer />
    </div>
  );
};

export default App;
