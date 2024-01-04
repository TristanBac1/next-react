"use client";
import { useRouter } from "next/navigation";

function OrderProduct() {
  const router = useRouter();
  function handleClick() {
    console.log("Placing Order");
    router.push("/");
  }

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}

export default OrderProduct;
