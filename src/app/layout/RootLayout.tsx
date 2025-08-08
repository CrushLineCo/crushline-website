import { Outlet, Link } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFCDA5] to-white text-gray-900">
      <header className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-[#F65032]">CrushLine</Link>
        <nav className="flex gap-6 text-lg font-medium">
            <Link to="/about" className="hover:text-[#F65032] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[#F65032] transition-colors">Contact</Link>
            <Link to="/dashboard" className="hover:text-[#F65032] transition-colors">Dashboard</Link>
        </nav>
    </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="max-w-5xl mx-auto px-4 py-12 text-sm text-gray-500">
        © {new Date().getFullYear()} CrushLine
      </footer>
    </div>
  );
}
