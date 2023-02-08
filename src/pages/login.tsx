import { Button } from "@chakra-ui/react";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, Auth } from "aws-amplify";

export default function Login() {
  return (
    <div>
      <Authenticator></Authenticator>
    </div>
  );
}
