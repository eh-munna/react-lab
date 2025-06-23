import getPosts from '@/data/posts';

const posts = getPosts();

export async function GET(_, { params }) {
  const { id } = await params;
  const post = posts.find((post) => post.id === parseInt(id));

  return new Response(
    JSON.stringify({
      message: post ? 'Post found' : 'Post not found',
      data: post || null,
    }),
    {
      status: post ? 200 : 404,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const updatedPost = await request.json();

  return new Response(
    JSON.stringify({
      message: 'Post updated successfully',
      data: {
        id,
        ...updatedPost,
      },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}

export async function DELETE(_, { params }) {
  const { id } = await params;
  const postIndex = posts.findIndex((post) => post.id === parseInt(id));

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    return new Response(
      JSON.stringify({
        message: 'Post deleted successfully',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return new Response(JSON.stringify({ message: 'Post not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}
