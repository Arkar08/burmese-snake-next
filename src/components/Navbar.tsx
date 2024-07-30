import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[80px] bg-black flex items-center">
      <Link href="/" className="text-white font-bold text-3xl px-8 lg:px-40">
        Snakes
      </Link>
    </div>
  );
};

export default Navbar;
