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
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title } = Typography;

const Page = () => {
  const Router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  // const [imageFile, setImageFile] = useState<File | null>(null);

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
    // if (imageFile) {
    //   formdata.append("clientfile", imageFile);
    // }

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
    <div style={{ padding: "20px" }}>
      <Row justify="center">
        <Col xs={24} sm={18} md={12} lg={8}>
          <Title level={2}>Signup</Title>

          <Form layout="vertical">
            <Form.Item label="Name">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Item>

            {/* <Form.Item label="Profile Pic">
              <Upload
                beforeUpload={(file) => {
                  setImageFile(file);
                  return false; // Prevent automatic upload
                }}
                showUploadList={false}
                customRequest={({ file, onSuccess }) => onSuccess?.({}, file)}
              >
                <Button icon={<UploadOutlined />}>Upload Profile Pic</Button>
              </Upload>
            </Form.Item> */}

            <Form.Item label="Email">
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Password">
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={handleSignup} block>
                Signup
              </Button>
            </Form.Item>

            <Form.Item>
              <Link href="/login">Already have an account?</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
