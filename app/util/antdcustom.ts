import { ThemeConfig, theme } from "antd";
import { Theme } from "antd/es/config-provider/context";

export const gridColDesign: ThemeConfig = {};

export const mainDesign: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    borderRadius: 4,
    colorPrimary: "hsl(234, 29%, 20%)",
    colorPrimaryHover: "var(--primary--tomato)",
    lineWidth: 0,
  },
};

export const globalDesign: ThemeConfig = {
  token: {
    fontFamily: `"Roboto", system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
  sans-serif;`,
  },
};
