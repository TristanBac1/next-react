import { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Blog" },
};

function Blog() {
  return <h1>My Blog</h1>;
}

export default Blog;
