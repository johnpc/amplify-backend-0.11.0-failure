import { Amplify } from "aws-amplify";
Amplify.configure({});
export const handler = async (
  event: any,
  context: any,
  callback: (err: any, response: any) => void,
) => {
  return callback(null, {event, context});
};
