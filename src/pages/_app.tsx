import type { AppProps } from "next/app";
import DefaultLayout from "@/layouts/default";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import hub from "@/hub";
import { RecoilRoot } from "recoil";

Amplify.configure({ ...awsExports, ssr: true });

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
