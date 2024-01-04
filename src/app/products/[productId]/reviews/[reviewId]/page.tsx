"use client";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function Reviews({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading the View");
  }

  return (
    <>
      <h2>Product: {params.productId}</h2>
      <h3>Review: {params.reviewId}</h3>{" "}
    </>
  );
}

export default Reviews;
