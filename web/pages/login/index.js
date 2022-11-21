import Layout from "../../Layouts/Layout";
import {
  Container,
  Row,
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
    <Container>
      <Row justify="center" align="center" css={{ height: "90vh" }}>
        <div>
          <Image src="/icon.png" height={100} width={100} />
          <Text
            h1
            size={60}
            css={{ fontFamily: "Bebas Neue", letterSpacing: "$wide" }}>
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
            <Button size="lg" css={{ width: "48%" }}>
              Log in
            </Button>
            <Button size="lg" color="secondary" css={{ width: "48%" }}>
              Sign up
            </Button>
          </Row>
          <RuleWithText style={{ marginTop: ".5rem" }}>OR</RuleWithText>
          <Button
            size="lg"
            bordered
            color="gradient"
            css={{ display: "block", width: "100%", marginTop: ".5rem" }}>
            <IconGoogle />
            &nbsp; Log in with Google
          </Button>
          <Button
            size="lg"
            css={{
              display: "block",
              width: "100%",
              marginTop: ".5rem",
              background: "#385499",
            }}>
            <IconFacebook fill="white" />
            &nbsp; Log in with Facebook
          </Button>
        </div>
      </Row>
    </Container>
  );
};

Login.Layout = Layout;

export default Login;
