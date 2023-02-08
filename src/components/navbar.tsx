import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box bg="teal" w="100%" p={4} color="white">
      <Link href="/">HOGE</Link>
    </Box>
  );
}
