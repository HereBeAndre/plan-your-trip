import { Search } from "./components/Search";
import { Results } from "./components/Results";

import { Layout } from "./shared/Layout";

import "./App.scss";

const App: React.FC = () => {
  return (
    // <div className="app-container"> TODO: revisit if needed
    <Layout>
      <Search />
      <Results />
    </Layout>
    // </div>
  );
};

export default App;
