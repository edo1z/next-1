import { withAuthenticator } from "@aws-amplify/ui-react";
import { createTodo } from "@/graphql/mutations";
import "@aws-amplify/ui-react/styles.css";
import { Text, Input, Textarea, Button } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  signOut: React.ReactNode;
  user: React.ReactNode;
}

interface TodoFormInput {
  title: string;
  description: string;
}

function CreateTodo({ user }: Props) {
  const { register, handleSubmit } = useForm<TodoFormInput>();
  const onSubmit: SubmitHandler<TodoFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text mb="8px">Title</Text>
      <Input {...register("title")} />
      <Text mb="8px" mt="10px">
        Description
      </Text>
      <Textarea {...register("description")} />
      <Button colorScheme="teal" mt="20px" type="submit">
        保存
      </Button>
    </form>
  );
}
export default withAuthenticator(CreateTodo);
