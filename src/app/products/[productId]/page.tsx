import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
}

function Product({ params }: Props) {
  return (
    <>
      <p>Details about Product: {params.productId} </p>
    </>
  );
}

export default Product;
