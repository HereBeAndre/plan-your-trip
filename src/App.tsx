import { Search } from "./components/Search";
import { Layout } from "./shared/Layout";

// import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    // <div className="app-container"> TODO: revisit if needed
    <Layout>
      <Search />
      {/* <Results /> */}
    </Layout>
    // </div>
  );
};

export default App;
