import { Button, Checkbox, Modal, Row, Switch, Text } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Settings({ visible, closeHandler }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [themeSwitchDisabled, setThemeSwitchDisabled] = useState(
    theme === "system",
  );

  useEffect(() => {
    setThemeSwitchDisabled(theme === "system");
  }, [theme]);

  const router = useRouter();
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}>
      <Modal.Header>
        <Text id="modal-title" b size={18} css={{ fontFamily: "Anton" }}>
          App Settings
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Row justify="space-between">
          <Text size={14}>Use System Theme</Text>
          <Checkbox
            defaultSelected={theme === "system"}
            onChange={e => {
              setTheme(e ? "system" : resolvedTheme);
            }}></Checkbox>
        </Row>
        <Row justify="space-between">
          <Text size={14}>Dark Mode</Text>
          <Switch
            initialChecked={resolvedTheme === "dark"}
            checked={resolvedTheme === "dark"}
            onChange={e => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
            disabled={themeSwitchDisabled}
          />
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto onClick={closeHandler}>
          DONE
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Settings;
