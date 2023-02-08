import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/default";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import hub from "@/hub";
Amplify.configure({ ...awsExports, ssr: true });
import { RecoilRoot } from "recoil";

export default function MyApp({ Component, pageProps }: AppProps) {
  hub();

  return (
    <RecoilRoot>
      <ChakraProvider>
        <Authenticator.Provider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </Authenticator.Provider>
      </ChakraProvider>
    </RecoilRoot>
  );
}
