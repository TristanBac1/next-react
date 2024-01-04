import Link from "next/link";

const productLinks = [
  { link: "1", name: "Product 1" },
  { link: "2", name: "Product 2" },
  { link: "3", name: "Product 3" },
];

function ProductList() {
  return (
    <>
      {productLinks.map((x) => (
        <Link href={x.link} replace={x.link === "3"}>
          <h1>{x.name}</h1>
        </Link>
      ))}
    </>
  );
}

export default ProductList;
