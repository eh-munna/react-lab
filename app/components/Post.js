const fetchPosts = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await res.json();
  } catch (error) {
    console.error(`${error.message}`);
  }
};

export default async function Post() {
  const posts = await fetchPosts();

  return posts.map((post) => (
    <div key={post.id} className="p-4 mb-4 border rounded-lg shadow-md">
      <h2 className="text-2xl">{post.title}</h2>{' '}
      <p className="mt-2 text-gray-700">{post.body}</p>
    </div>
  ));
}
