import { useState } from "react";
import { Layout } from "../components/layout/layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <Layout activeElement={activeNav}>
      <Component {...pageProps} setActive={setActiveNav} />
    </Layout>
  );
};

export default App;
