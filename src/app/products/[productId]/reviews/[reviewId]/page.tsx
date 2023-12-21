function Reviews({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <>
      <h2>Product: {params.productId}</h2>
      <h3>Review: {params.reviewId}</h3>{" "}
    </>
  );
}

export default Reviews;
