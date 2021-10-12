import { Card, Layout, Row } from "antd";
import { ReactElement } from "react";
import { LoginForm } from "../components/LoginForm";

export const Login = (): ReactElement => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};
