import { Hub, Logger } from "aws-amplify";

const logger = new Logger("My-Logger");

const listener = (data: any) => {
  console.log("event", data.payload.event);
  switch (data.payload.event) {
    case "configured":
      logger.info("the Auth module is configured");
      console.log("the Auth module is configured");
      break;
    case "signIn":
      logger.info("user signed in");
      console.log("user signed in");
      break;
    case "signIn_failure":
      logger.error("user sign in failed");
      console.log("user sign in failed");
      break;
    case "signUp":
      logger.info("user signed up");
      console.log("user signed up");
      break;
    case "signUp_failure":
      logger.error("user sign up failed");
      console.log("user sign up failed");
      break;
    case "confirmSignUp":
      logger.info("user confirmation successful");
      console.log("user confirmation successful");
      break;
    case "completeNewPassword_failure":
      logger.error("user did not complete new password flow");
      console.log("user did not complete new password flow");
      break;
    case "autoSignIn":
      logger.info("auto sign in successful");
      console.log("auto sign in successful");
      break;
    case "autoSignIn_failure":
      logger.error("auto sign in failed");
      console.log("auto sign in failed");
      break;
    case "forgotPassword":
      logger.info("password recovery initiated");
      console.log("password recovery initiated");
      break;
    case "forgotPassword_failure":
      logger.error("password recovery failed");
      console.log("password recovery failed");
      break;
    case "forgotPasswordSubmit":
      logger.info("password confirmation successful");
      console.log("password confirmation successful");
      break;
    case "forgotPasswordSubmit_failure":
      logger.error("password confirmation failed");
      console.log("password confirmation failed");
      break;
    case "tokenRefresh":
      logger.info("token refresh succeeded");
      console.log("token refresh succeeded");
      break;
    case "tokenRefresh_failure":
      logger.error("token refresh failed");
      console.log("token refresh failed");
      break;
    case "cognitoHostedUI":
      logger.info("Cognito Hosted UI sign in successful");
      console.log("Cognito Hosted UI sign in successful");
      break;
    case "cognitoHostedUI_failure":
      logger.error("Cognito Hosted UI sign in failed");
      console.log("Cognito Hosted UI sign in failed");
      break;
    case "customOAuthState":
      logger.info("custom state returned from CognitoHosted UI");
      console.log("custom state returned from CognitoHosted UI");
      break;
    case "customState_failure":
      logger.error("custom state failure");
      console.log("custom state failure");
      break;
    case "parsingCallbackUrl":
      logger.info("Cognito Hosted UI OAuth url parsing initiated");
      console.log("Cognito Hosted UI OAuth url parsing initiated");
      break;
    case "userDeleted":
      logger.info("user deletion successful");
      console.log("user deletion successful");
      break;
    case "signOut":
      logger.info("user signed out");
      console.log("user signed out");
      break;
  }
};

export default function listen() {
  console.log("listen start");
  Hub.listen("auth", listener);
}
