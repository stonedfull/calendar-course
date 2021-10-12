import { ReactElement, useCallback } from "react";
import { Button, Form, Input } from "antd";
import { rules } from "../utils/rules";
import { User } from "../models/User";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

export const LoginForm = (): ReactElement => {
  const { login } = useActions();
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const handleSubmit = useCallback(
    (form: User) => {
      login(form);
    },
    [login],
  );

  return (
    <Form onFinish={handleSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item label="Username" name="username" rules={[rules.required("Please input your username")]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[rules.required("Please input your password")]}>
        <Input type="password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }} loading={isLoading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
