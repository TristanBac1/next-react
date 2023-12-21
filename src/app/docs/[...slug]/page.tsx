import { notFound } from "next/navigation";
function Docs({ params }: { params: { slug: string[] } }) {
  console.log(params);
  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing Docs Home Page for feature {params.slug[0]} and concept{" "}
        {params.slug[1]}
      </h1>
    );
  }
  if (params.slug.length === 1) {
    return <h1>Viewing Docs only for Feature {params.slug[0]}</h1>;
  }
  if (params.slug.length === 3) {
    notFound();
  }
}

export default Docs;
