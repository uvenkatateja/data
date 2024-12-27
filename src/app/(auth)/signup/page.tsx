"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Form,
  Typography,
  Upload,
  Row,
  Col,
  message,
  Card,
} from "antd";
import { UploadOutlined, UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

const { Title } = Typography;

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

const StyledLink = styled(Link)`
  color: #1890ff;
  transition: all 0.3s ease;
  
  &:hover {
    color: #40a9ff;
  }
`;

const Page = () => {
  const Router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = async () => {
    setSendingOtp(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sendotp`, {
      method: "POST",
      body: JSON.stringify({ email: formData.email }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    setSendingOtp(false);

    if (data.ok) {
      message.success("OTP sent");
    } else {
      message.error(data.message);
    }
  };

  const handleSignup = async () => {
    if (!formData.name || !formData.email || !formData.password || !otp) {
      message.error("Please fill all the fields");
      return;
    }

    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("email", formData.email);
    formdata.append("password", formData.password);
    formdata.append("otp", otp);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      {
        method: "POST",
        body: formdata,
        credentials: "include",
      }
    );

    const data = await res.json();
    if (data.ok) {
      message.success("Signup successful");
      Router.push("/login");
    } else {
      message.error(data.message);
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
                Create Account
              </Title>
              <Typography.Text style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                Join us to get started
              </Typography.Text>
            </div>

            <Form layout="vertical" size="large" style={{ gap: '12px' }}>
              <Form.Item label={<span style={{ color: '#000000' }}>Name</span>} style={{ marginBottom: '12px' }}>
                <StyledInput
                  prefix={<UserOutlined style={{ color: '#1890ff' }} />}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </Form.Item>

              <Form.Item label={<span style={{ color: '#000000' }}>Email</span>} style={{ marginBottom: '12px' }}>
                <StyledInput
                  prefix={<MailOutlined style={{ color: '#1890ff' }} />}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  suffix={
                    !sendingOtp ? (
                      <StyledButton type="primary" onClick={sendOtp} size="small">
                        Send OTP
                      </StyledButton>
                    ) : (
                      <Button type="default" disabled size="small">
                        Sending...
                      </Button>
                    )
                  }
                />
              </Form.Item>

              <Form.Item label={<span style={{ color: '#000000' }}>OTP</span>} style={{ marginBottom: '12px' }}>
                <StyledInput
                  type="text"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
              </Form.Item>

              <Form.Item label={<span style={{ color: '#000000' }}>Password</span>} style={{ marginBottom: '16px' }}>
                <StyledInput
                  prefix={<LockOutlined style={{ color: '#1890ff' }} />}
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Form.Item style={{ marginBottom: '12px' }}>
                <StyledButton type="primary" onClick={handleSignup} block>
                  Sign Up
                </StyledButton>
              </Form.Item>

              <div style={{ textAlign: 'center', marginTop: '4px' }}>
                <StyledLink href="/login">
                  Already have an account? Login
                </StyledLink>
              </div>
            </Form>
          </StyledCard>
        </Col>
      </Row>
    </PageBackground>
  );
};

export default Page;
