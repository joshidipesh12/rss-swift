import { useState, useEffect } from "react";
import Settings from "./Settings";
import { Avatar, Button, Image, Navbar, Text } from "@nextui-org/react";
import { EuiButtonIcon } from "@elastic/eui";
import Router, { useRouter } from "next/router";

const Header = () => {
  const { route } = useRouter();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <Navbar maxWidth="fluid" isCompact variant="sticky">
        <Navbar.Content>
          <Navbar.Link href="/">
            <Image
              alt="RSS Swift Logo"
              src="/icon.png"
              objectFit="contain"
              height={30}
              width={30}
            />
            <Text
              b
              size="$xl"
              color="inherit"
              hideIn="xs"
              css={{ fontFamily: "Pacifico" }}>
              Swift RSS
            </Text>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content enableCursorHighlight variant="underline">
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
          <Navbar.Link href="/login">
            <Avatar
              bordered
              as="button"
              color="primary"
              size="md"
              src={`https://avatars.dicebear.com/api/initials/${"Abhishek Passan"}.svg`}
            />
          </Navbar.Link>
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
