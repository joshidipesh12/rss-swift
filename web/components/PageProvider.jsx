import { EuiProvider } from "@elastic/eui";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useSystemTheme from "../hooks/useThemeDetector";
import { NextUIProvider } from "@nextui-org/react";
import nextuiTheme from "../util/nextuiTheme";

const PageProvider = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const systemTheme = useSystemTheme();
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    if (resolvedTheme === "dark" || resolvedTheme === "light")
      setCurrentTheme(resolvedTheme);
    else setCurrentTheme(systemTheme);
  }, [resolvedTheme]);

  return (
    <NextUIProvider theme={nextuiTheme[currentTheme]}>
      <EuiProvider colorMode={currentTheme}>{children}</EuiProvider>
    </NextUIProvider>
  );
};
export default PageProvider;
