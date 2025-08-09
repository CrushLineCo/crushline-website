type AmplifyOutputs = { version: string; data: Record<string, any> };

export async function loadAmplifyOutputs(): Promise<AmplifyOutputs> {
  const override = (import.meta.env.VITE_BACKEND || "").toLowerCase();

  // Production hosting → use CI-generated file
  if (import.meta.env.PROD && override !== "sandbox") {
    const res = await fetch("/amplify_outputs.json", { cache: "no-store" });
    if (res.ok) return (await res.json()) as AmplifyOutputs;
    // if fetch fails in prod, fall through to avoid crashing build
  }

  // Dev / overrides → use files served from Vite's public/
  const filename =
    override === "prod"
      ? "/amplify_outputs.prod.json"
      : "/amplify_outputs.sandbox.json";

  const res = await fetch(filename, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(
      `Missing ${filename}. Run "npm run use:sandbox" or "npm run use:prod".`
    );
  }
  return (await res.json()) as AmplifyOutputs;
}
