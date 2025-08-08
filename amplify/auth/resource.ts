import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: { email: true },
  multifactor: {
    mode: 'OPTIONAL',
    totp: true
  },
  userAttributes: {
    phoneNumber:       { required: false, mutable: true },
    // Optional extras if you want them available now:
    givenName: { required: true, mutable: true },
    familyName:{ required: true, mutable: true }
  }
});
