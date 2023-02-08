import { withAuthenticator } from "@aws-amplify/ui-react";
import { createTodo } from "@/graphql/mutations";
import "@aws-amplify/ui-react/styles.css";

interface Props {
  signOut: React.ReactNode;
  user: React.ReactNode;
}

function Login({ signOut, user }: Props) {
  return (
    <div>
      <div>LOGIN</div>
      <p>This is LOGIN page</p>
    </div>
  );
}
export default withAuthenticator(Login);
