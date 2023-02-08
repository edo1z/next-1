import { Authenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { createTodo } from "@/graphql/mutations";
import "@aws-amplify/ui-react/styles.css";
import { Text, Input, Textarea, Button } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateTodoInput } from "@/API";

interface Props {
  signOut: React.ReactNode;
  user: React.ReactNode;
}

export default function CreateTodo({ user }: Props) {
  const { register, handleSubmit } = useForm<CreateTodoInput>();
  const onSubmit: SubmitHandler<CreateTodoInput> = async (data) => {
    try {
      const result = await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: createTodo,
        variables: {
          input: data,
        },
      });
      console.log("createTodo Result", result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Authenticator>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text mb="8px">Title</Text>
        <Input {...register("name")} />
        <Text mb="8px" mt="10px">
          Description
        </Text>
        <Textarea {...register("description")} />
        <Button colorScheme="teal" mt="20px" type="submit">
          保存
        </Button>
      </form>
    </Authenticator>
  );
}
