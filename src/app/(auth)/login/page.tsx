"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { Form, Input, Button, Typography, Space, Card, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

const { Title, Text } = Typography;

const StyledCard = styled(Card)`
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  transition: all 0.3s ease;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  }
`;

const PageBackground = styled.div`
  min-height: 100vh;
  background: white;
  padding: 20px;
  padding-top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background: #1890ff;
  border: none;
  height: 40px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #40a9ff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(24, 144, 255, 0.2);
  }
`;

const StyledInput = styled(Input)`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  
  &:hover, &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
  }
`;

const StyledPasswordInput = styled(Input.Password)`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  
  &:hover, &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
  }
`;

const StyledLink = styled(Link)`
  color: #1890ff;
  transition: all 0.3s ease;
  
  &:hover {
    color: #40a9ff;
  }
`;

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
    <PageBackground>
      <Row justify="center" style={{ width: '100%', marginTop: '30px' }}>
        <Col xs={23} sm={20} md={14} lg={10} xl={8}>
          <StyledCard>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Title level={2} style={{ 
                color: '#000000',
                marginBottom: '5px'
              }}>
                Login
              </Title>
              <Typography.Text style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                Welcome back
              </Typography.Text>
            </div>

            <Form
              name="login"
              onFinish={onFinish}
              layout="vertical"
              size="large"
              style={{ gap: '12px' }}
              initialValues={{ email: "", password: "" }}
            >
              <Form.Item
                name="email"
                label={<span style={{ color: '#000000' }}>Email</span>}
                rules={[{ required: true, message: "Please enter your email!" }]}
                style={{ marginBottom: '12px' }}
              >
                <StyledInput 
                  prefix={<UserOutlined style={{ color: '#1890ff' }} />}
                  type="email"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={<span style={{ color: '#000000' }}>Password</span>}
                rules={[{ required: true, message: "Please enter your password!" }]}
                style={{ marginBottom: '16px' }}
              >
                <StyledPasswordInput 
                  prefix={<LockOutlined style={{ color: '#1890ff' }} />}
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item style={{ marginBottom: '12px' }}>
                <StyledButton type="primary" htmlType="submit" block>
                  Login
                </StyledButton>
              </Form.Item>

              <div style={{ textAlign: 'center', marginTop: '4px' }}>
                <Space direction="vertical" size={4}>
                  <StyledLink href="/forgotpassword">
                    Forgot password?
                  </StyledLink>
                  <StyledLink href="/signup">
                    Dont have an account? Sign up
                  </StyledLink>
                </Space>
              </div>
            </Form>
          </StyledCard>
        </Col>
      </Row>
    </PageBackground>
  );
};

export default Page;
