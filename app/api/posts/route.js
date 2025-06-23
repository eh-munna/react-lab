import getPosts from '@/data/posts';

const posts = getPosts();

export async function GET(request) {
  // Check if the request has a query parameter for filtering

  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  let filteredPosts = posts;

  if (query) {
    filteredPosts = posts.filter((post) =>
      post.content.toLowerCase().includes(query)
    );
    return new Response(
      JSON.stringify({
        message: filteredPosts.length > 0 ? 'Posts found' : 'No posts found',
        data: filteredPosts,
      }),
      {
        status: filteredPosts.length > 0 ? 200 : 404,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  return new Response(JSON.stringify(posts));
}

export async function POST(request) {
  const requestBody = await request.json();

  const post = {
    id: posts.length + 1,
    title: requestBody.title,
    content: requestBody.content,
  };

  posts.push(post);
  return new Response(
    JSON.stringify({
      message: 'Post created successfully',
      data: {
        ...post,
      },
    }),
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
