function Product({ params }: { params: { productId: string } }) {
  return <p>Details about Product: {params.productId} </p>;
}

export default Product;
