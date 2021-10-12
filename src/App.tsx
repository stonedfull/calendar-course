import { Layout } from "antd";
import { ReactElement, useEffect } from "react";
import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { User } from "./models/User";

const App = (): ReactElement => {
  const { setUser, setIsAuth } = useActions();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") } as User);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
