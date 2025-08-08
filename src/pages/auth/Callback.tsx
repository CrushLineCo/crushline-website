import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAuthSession } from 'aws-amplify/auth';
import Loading from '../../components/Loading';

export default function Callback() {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await fetchAuthSession(); // processes redirect under the hood
      navigate('/dashboard');
    })();
  }, [navigate]);
  return <Loading />;
}
