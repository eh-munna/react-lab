export default function Docs({ params }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Documentation for {params.slug}
      </h1>
    </div>
  );
}
