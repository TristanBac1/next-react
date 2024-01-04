function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading the View in Products");
  }

  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
}

export default ProductDetailsLayout;
