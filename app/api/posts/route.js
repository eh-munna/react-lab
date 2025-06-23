import getPosts from '@/data/posts';

const posts = getPosts();

export async function GET() {
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
