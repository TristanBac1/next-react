import Link from "next/link";

function F4Page() {
  return (
    <>
      <h1>F4 Page</h1>
      <div>
        <Link href="/f1/f3">F3</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
}

export default F4Page;
