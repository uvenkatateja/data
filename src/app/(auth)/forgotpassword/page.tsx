"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Input, Form, Typography, Row, Col, message } from "antd";
import { useMediaQuery } from "react-responsive";

const { Title } = Typography;

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 992 });

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

  const Router = useRouter();
  const handleSubmit = async () => {
    if (formData.email === "" || formData.password === "" || otp === "") {
      message.error("Please fill all the fields");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/changepassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          otp,
        }),
        credentials: "include",
      }
    );

    const data = await res.json();
    if (data.ok) {
      message.success("Password changed");
      Router.push("/login");
    } else {
      message.error(data.message);
    }
  };

  return (
    <div style={{ padding: isDesktop ? "50px" : "20px" }}>
      <Row justify="center">
        <Col xs={24} sm={16} md={12} lg={8}>
          <Title level={2}>Forgot Password</Title>

          <Form layout="vertical">
            <Form.Item label="Email">
              <Input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                suffix={
                  !sendingOtp ? (
                    <Button type="primary" onClick={sendOtp}>
                      Send OTP
                    </Button>
                  ) : (
                    <Button type="default" disabled>
                      Sending OTP
                    </Button>
                  )
                }
              />
            </Form.Item>

            <Form.Item label="OTP">
              <Input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Password">
              <Input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={handleSubmit} block>
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
