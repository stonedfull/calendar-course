import { ReactElement } from "react";
import { Layout, Menu, Row } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const Navbar = (): ReactElement => {
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      {isAuth ? (
        <Row>
          <div style={{ color: "white", padding: "0 20px" }}>{user.username}</div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item key={1} onClick={logout}>
              Logout
            </Menu.Item>
          </Menu>
        </Row>
      ) : (
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key={1}>Login</Menu.Item>
        </Menu>
      )}
    </Layout.Header>
  );
};
