"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { Form, Input, Button, Typography, Space } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;

const Page = () => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.authReducer);
  const dispatch = useDispatch<AppDispatch>();

  const onFinish = async (values: { email: string; password: string }) => {
    let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });
    let data = await res.json();
    if (data.ok) {
      toast.success("Login success");
      getUserData();
    } else {
      toast.error(data.message);
    }
  };

  const getUserData = async () => {
    let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/getuser", {
      method: "GET",
      credentials: "include",
    });
    let data = await res.json();
    if (data.ok) {
      dispatch(logIn(data.data));
      router.push("/myfiles");
    } else {
      dispatch(logOut());
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <Title level={1} style={{ textAlign: "center" }}>
        <strong>LOGIN</strong>
      </Title>
      <Form
        name="login"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ email: "", password: "" }}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Space
        direction="vertical"
        style={{ width: "100%", textAlign: "center" }}
      >
        <Link href="/forgotpassword">
          <Text>Forgot password</Text>
        </Link>
      </Space>
    </div>
  );
};

export default Page;
