import { useState, useEffect } from "react";
import Settings from "./Settings";
import { Button, Image, Navbar, Text } from "@nextui-org/react";
import { EuiButtonIcon } from "@elastic/eui";
import { useRouter } from "next/router";

const Header = () => {
  const { route } = useRouter();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <Navbar isCompact variant="sticky">
        <Navbar.Content>
          <Navbar.Link href="/">
            <Image src="/icon.png" objectFit="contain" height={30} width={30} />
            <Text b size="$1xl" color="inherit" hideIn="xs">
              Swift RSS
            </Text>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link isActive={route === "/"} href="/">
            <Text size="$1xl" color="inherit">
              Home
            </Text>
          </Navbar.Link>
          <Navbar.Link isActive={route === "/feeds"} href="/feeds">
            <Text size="$1xl" color="inherit">
              Providers
            </Text>
          </Navbar.Link>
          <Navbar.Link isActive={route === "/top_feeds"} href="/top_feeds">
            <Text size="$1xl" color="inherit">
              Top Feeds
            </Text>
          </Navbar.Link>
          <EuiButtonIcon
            onClick={() => setIsSettingsOpen(true)}
            iconType="advancedSettingsApp"
            aria-label="Settings"
          />
        </Navbar.Content>
      </Navbar>
      <Settings
        visible={isSettingsOpen}
        closeHandler={() => setIsSettingsOpen(false)}
      />
    </>
  );
};

export default Header;
