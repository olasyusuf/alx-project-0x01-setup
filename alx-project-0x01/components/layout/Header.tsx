import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Advanced Structures</h1>
      <nav className="flex gap-4">
        <Link href="/posts" className="hover:underline">Posts</Link>
        <Link href="/users" className="hover:underline">Users</Link>
      </nav>
    </header>
  );
};

export default Header;