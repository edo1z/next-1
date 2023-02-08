import { Flex, Spacer, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";

export default function NavBar() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const router = useRouter();
  const logoutBtn = (
    <Button colorScheme="teal" onClick={signOut}>
      Log out
    </Button>
  );
  const loginBtn = (
    <Button colorScheme="teal" onClick={() => router.push("/login")}>
      Log in
    </Button>
  );
  const authBtn = user ? logoutBtn : loginBtn;

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
