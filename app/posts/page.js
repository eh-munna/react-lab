async function getData() {
  const response = await fetch('http://localhost:3000/api/posts');
  return response.json();
}

export default async function Posts() {
  const posts = await getData();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">All Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

