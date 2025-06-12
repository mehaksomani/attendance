import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-centre max-w-6xl mx-auto">
        <div className="text-xl font-bold">Skill Sheet</div>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <Link href="/signup" className="hover:underline">Signup</Link>
        </div>
      </div>
    </nav>
  );
}
