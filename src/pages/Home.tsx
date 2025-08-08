import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-20">
  <h1 className="text-5xl font-extrabold text-gray-900">Meet better. Match smarter.</h1>
  <p className="max-w-xl text-lg text-gray-700">
    On-campus speed dating powered by real-time matching. Zero cringe.
  </p>
  <div className="flex gap-4">
    <Link
      to="/signin"
      className="px-6 py-3 rounded-full bg-[#F65032] text-white font-semibold hover:bg-[#d54329] transition-colors"
    >
      Get started
    </Link>
    <Link
      to="/about"
      className="px-6 py-3 rounded-full border border-gray-300 font-semibold hover:border-[#F65032] hover:text-[#F65032] transition-colors"
    >
      How it works
    </Link>
  </div>
</section>
  );
}
