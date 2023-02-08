import { Button } from "@chakra-ui/react";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "@/aws-exports";
import { createTodo } from "@/graphql/mutations";

export default function Login() {
  return (
    <div>
      <div>LOGIN</div>
      <p>This is LOGIN page</p>
    </div>
  );
}
