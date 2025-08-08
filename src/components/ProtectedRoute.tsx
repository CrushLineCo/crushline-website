import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from 'aws-amplify/auth';
import Loading from './Loading';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const [checking, setChecking] = useState(true);
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await getCurrentUser();
        setOk(true);
      } catch {
        navigate('/signin');
      } finally {
        setChecking(false);
      }
    })();
  }, [navigate]);

  if (checking) return <Loading />;
  return ok ? <>{children}</> : null;
}
