"use client";

import { Space, Button, Layout, ConfigProvider, Image, Typography } from "antd";
import Link from "next/link";
import { globalDesign, mainDesign } from "../util/antdcustom";
import {
  subscribeButtonStyle,
  subscribeContentStyle,
  subscribeSpaceStyle,
  titleStyle,
} from "../util/cssstyle";
import "../globals.css";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";
import { useZustandStore } from "../store/store";

export default function Home() {
  const { Content, Footer } = Layout;
  const { Title, Text } = Typography;
  const router = useRouter();
  const { testdata } = useZustandStore();

  const moveToMainPage = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <ConfigProvider theme={globalDesign}>
      <Space style={subscribeSpaceStyle}>
        <Content style={subscribeContentStyle}>
          <Image
            src="/icon-success.svg"
            alt=""
            width={48}
            height={64}
            preview={false}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem 0",
            }}
          />
          <Title style={titleStyle}>Thanks for subscribing!</Title>
          <Text style={{ margin: "0.5rem 0" }}>
            A confirmation email has been sent to <Text strong>{testdata}</Text>
            . Please open it and click the button inside to confirm your
            subscription.
          </Text>
          <ConfigProvider theme={mainDesign}>
            <Button
              type="primary"
              style={subscribeButtonStyle}
              htmlType="button"
              onClick={moveToMainPage}
            >
              Dismiss message
            </Button>
          </ConfigProvider>
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
