import { Amplify } from 'aws-amplify';
// make sure amplify_outputs.json exists (from `npx ampx sandbox`)
import outputs from '../../amplify_outputs.json';
Amplify.configure(outputs);
