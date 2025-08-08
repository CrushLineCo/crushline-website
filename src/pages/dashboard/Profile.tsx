import { useEffect, useState } from 'react';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';

export default function Profile() {
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const user = await getCurrentUser();
      const attrs = await fetchUserAttributes();
      setInfo({ user, attrs });
    })();
  }, []);

  if (!info) return <div>Loading…</div>;
  return <pre className="p-4 rounded-xl bg-white/60">{JSON.stringify(info, null, 2)}</pre>;
}
