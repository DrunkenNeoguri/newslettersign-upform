"use client";

import {
  Space,
  Button,
  Layout,
  Row,
  Col,
  Form,
  Input,
  ConfigProvider,
  Image,
  Typography,
  message,
} from "antd";
import Link from "next/link";
import { globalDesign, mainDesign } from "./util/antdcustom";
import {
  buttonStyle,
  contentStyle,
  leftColStyle,
  spaceStyle,
  titleStyle,
} from "./util/cssstyle";
import "./globals.css";
import styles from "./page.module.css";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useZustandStore } from "./store/store";

export default function Home() {
  const { Content, Footer } = Layout;
  const { Title, Text } = Typography;
  const inputRef = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const { fixfunc } = useZustandStore();

  const submitInputMessage = (values: any) => {
    if (values.email.trim() === "") {
      return messageApi.error({
        content: "valided email required",
        duration: 5,
        key: "validedEmail",
      });
    }

    fixfunc(values.email);

    return router.push("/subscribe");
  };

  const alertInputMessage = (values: any) => {
    messageApi.error({
      content: "valided email required",
      duration: 5,
      key: "validedEmail",
    });
  };

  return (
    <ConfigProvider theme={globalDesign}>
      {contextHolder}
      <Space style={spaceStyle}>
        <Content style={contentStyle}>
          <Row justify="space-between">
            <Col span={12} style={leftColStyle}>
              <Title style={titleStyle}>Stay updated!</Title>
              <Text style={{ margin: "0.5rem 0" }}>
                Join 60,000+ product managers receiving monthly updates on:
              </Text>
              <Space
                direction="vertical"
                size="middle"
                style={{ margin: "1rem 0" }}
              >
                <Row
                  align="bottom"
                  style={{
                    gap: "1rem",
                  }}
                >
                  <Image
                    src="/icon-success.svg"
                    alt=""
                    width={16}
                    height={16}
                    preview={false}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                  Product discovery and building what matters
                </Row>
                <Row
                  align="bottom"
                  style={{
                    gap: "1rem",
                  }}
                >
                  <Image
                    src="/icon-success.svg"
                    alt=""
                    width={16}
                    height={16}
                    preview={false}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                  Measuring to ensure updates are a success
                </Row>
                <Row
                  align="bottom"
                  style={{
                    gap: "1rem",
                  }}
                >
                  <Image
                    src="/icon-success.svg"
                    alt=""
                    width={16}
                    height={16}
                    preview={false}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                  And much more!
                </Row>
              </Space>
              <Form
                name="subscribe"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{
                  fontSize: "0.75rem",
                  margin: "1rem 0",
                }}
                onFinish={submitInputMessage}
                onFinishFailed={alertInputMessage}
              >
                <Form.Item
                  label="Email address"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "valid email required",
                    },
                  ]}
                  style={{ fontWeight: 700 }}
                >
                  <Input
                    placeholder="email@company.com"
                    style={{ height: "3rem", padding: "0 1.25rem" }}
                    ref={inputRef}
                  />
                </Form.Item>
                <ConfigProvider theme={mainDesign}>
                  <Button type="primary" style={buttonStyle} htmlType="submit">
                    Subscribe to monthly newsletter
                  </Button>
                </ConfigProvider>
              </Form>
            </Col>
            <Col span={11}>
              <Image
                src="/illustration-sign-up-desktop.svg"
                alt=""
                preview={false}
              />
            </Col>
          </Row>
        </Content>
        <Footer className={styles.attribution}>
          Challenge by{" "}
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by <Link href="#">@drunken_neoguri</Link>.
        </Footer>
      </Space>
    </ConfigProvider>
  );
}
