import { createTheme } from "@nextui-org/react";

const globalTheme = {
  theme: {},
};

const dark = createTheme({
  type: "dark",
  ...globalTheme,
});

const light = createTheme({
  type: "light",
  ...globalTheme,
});

const theme = { dark, light, system: dark };

export default theme;
