import { Amplify } from "aws-amplify";
import { loadAmplifyOutputs } from "../amplifyConfig";

export async function configureAmplify() {
  const outputs = await loadAmplifyOutputs();
  Amplify.configure(outputs);
}