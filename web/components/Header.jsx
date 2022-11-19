import { useState, useEffect } from "react";
import Settings from "./Settings";
import { Button, Image, Navbar, Text } from "@nextui-org/react";

const Header = () => {
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
          <Button
            auto
            shadow
            aria-label="App Settings"
            onClick={() => setIsSettingsOpen(true)}>
            <Text transform="uppercase">Settings</Text>
          </Button>
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
