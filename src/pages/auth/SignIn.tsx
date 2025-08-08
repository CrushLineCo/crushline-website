import { signInWithRedirect } from 'aws-amplify/auth';

export default function SignIn() {
  return (
    <div className="max-w-md grid gap-4">
      <h2 className="text-2xl font-bold">Sign in</h2>
      <button
        className="px-4 py-2 rounded-2xl border"
        onClick={() => signInWithRedirect({ provider: 'Google' })}
      >
        Continue with Google
      </button>
    </div>
  );
}
