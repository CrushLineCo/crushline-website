type AmplifyOutputs = {
  version: string;
  data: Record<string, any>;
};

export async function loadAmplifyOutputs(): Promise<AmplifyOutputs> {
  if (import.meta.env.PROD) {
    try {
      const res = await fetch('/amplify_outputs.json', { cache: 'no-store' });
      if (res.ok) return (await res.json()) as AmplifyOutputs;
    } catch {}
  }
  // dev → sandbox file
  const mod = await import('../amplify_outputs.sandbox.json');
  return (mod as any).default ?? mod;
}