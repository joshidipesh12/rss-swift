import Layout from "../../Layouts/Layout";
import {
  Container,
  Row,
  Col,
  Text,
  Input,
  Spacer,
  Button,
  Checkbox,
  Link,
  Image,
} from "@nextui-org/react";
import RuleWithText from "../../components/RuleWithText";
import IconGoogle from "../../components/iconGoogle";
import IconFacebook from "../../components/IconFacebook";

const Login = () => {
  return (
    <Container xs>
      <Row justify="center" align="center" css={{ height: "90vh" }}>
        <Col>
          <Image src="/icon.png" height={70} width={70} />
          <Text
            h1
            size="$5xl"
            css={{
              fontFamily: "Bebas Neue",
              letterSpacing: "$wide",
              textAlign: "center",
            }}>
            Login to your Account
          </Text>
          <Spacer y={3} />
          <Input
            clearable
            placeholder="abc@example.com"
            label="E-mail"
            size="lg"
            type="email"
            css={{ display: "block" }}
          />
          <Spacer y={1.5} />
          <Input.Password
            label="Password"
            size="lg"
            css={{ display: "block" }}
          />
          <Spacer y={1} />
          <Row justify="space-between">
            <Checkbox
              defaultSelected={true}
              size="sm"
              color="gradient"
              isRounded={true}>
              Remember Me
            </Checkbox>
            <Link css={{ color: "Gray", textDecoration: "underline" }}>
              Forgot Password?
            </Link>
          </Row>
          <Spacer y={2} />
          <Row justify="space-between">
            <Col
              css={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "4%",
              }}>
              <Button css={{ width: "48%" }}>Log in</Button>
              <Button color="secondary" css={{ width: "48%" }}>
                Sign up
              </Button>
            </Col>
          </Row>
          <RuleWithText style={{ marginTop: ".5rem" }}>OR</RuleWithText>
          <Button
            bordered
            color="gradient"
            css={{ display: "block", width: "100%", marginTop: ".5rem" }}>
            <IconGoogle />
            &nbsp; Log in with Google
          </Button>
          <Button
            css={{
              display: "block",
              width: "100%",
              marginTop: ".5rem",
              background: "#385499",
            }}>
            <IconFacebook fill="white" />
            &nbsp; Log in with Facebook
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

Login.Layout = Layout;

export default Login;
