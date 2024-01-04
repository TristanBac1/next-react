import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Welcome Home Tristan</h1>
      <Link href="/blog">Blog</Link>

      <Link href="/login">Login</Link>
      <Link href="/about">About</Link>
      <Link href="/products">Products</Link>
    </>
  );
}

export default Home;
