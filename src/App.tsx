import { Layout } from "./shared/Layout";
import { Content } from "./shared/Content";

// import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    // <div className="app-container"> TODO: revisit if needed
    <Layout>
      <Content />
    </Layout>
    // </div>
  );
};

export default App;
