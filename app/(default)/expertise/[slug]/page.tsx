export default function ExpertiseCasePage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  return (
    <div>
      <h1>Expertise Case Page {slug}</h1>
    </div>
  );
}
