import { createTheme } from "@nextui-org/react";

const globalTheme = {
  theme: {},
};

const dark = createTheme({
  type: "dark",
});

const light = createTheme({
  type: "light",
});

const theme = { dark, light, system: dark };

export default theme;
