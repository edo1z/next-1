import { Flex, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export default function NavBar() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const router = useRouter();
  const logout = async () => {
    await Auth.signOut();
    router.push("/");
  };
  const login = () => {
    router.push("/login");
  };
  let authBtn = null;
  const logoutBtn = <Button onClick={logout}>Log out</Button>;
  const loginBtn = <Button onClick={login}>Log in</Button>;
  if (authStatus !== "configuring") {
    authBtn = authStatus === "authenticated" ? logoutBtn : loginBtn;
  }

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      p={4}
      bg="teal.500"
      color="white"
    >
      <Link href="/">HOGE</Link>
      <Spacer />
      {authBtn}
    </Flex>
  );
}
