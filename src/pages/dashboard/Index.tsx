import { signOut } from 'aws-amplify/auth';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="grid gap-4">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="flex gap-3">
        <Link to="/profile" className="px-4 py-2 rounded-2xl border">Profile</Link>
        <button
          className="px-4 py-2 rounded-2xl bg-[#F65032] text-white"
          onClick={() => signOut({ global: true }).then(() => location.href = '/signed-out')}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
