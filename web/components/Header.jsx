import { useState, useEffect } from "react";
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
} from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_light.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Settings from "./Settings";

const Header = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <EuiHeader
      theme={resolvedTheme === "light" ? "default" : "dark"}
      position="fixed">
      <EuiHeaderSection side="left">
        <EuiHeaderSectionItem
          css={{ cursor: "pointer" }}
          onClick={() => router.push("/")}>
          <EuiHeaderLogo iconType="/icon.png">
            {/* https://www.svgrepo.com/show/25140/rss.svg */}
            RSS Swift
          </EuiHeaderLogo>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem>
          <EuiHeaderSectionItemButton
            aria-label="App Settings"
            onClick={() => setIsSettingsOpen(true)}>
            <EuiIcon type="advancedSettingsApp" size="m" />
          </EuiHeaderSectionItemButton>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      <Settings
        visible={isSettingsOpen}
        closeHandler={() => setIsSettingsOpen(false)}
      />
    </EuiHeader>
  );
};

export default Header;
