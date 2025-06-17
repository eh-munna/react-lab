import getBlogs from '@/app/data/blogs';
import Link from 'next/link';

export default function Blog({ params }) {
  const blogs = getBlogs();
  const { id } = params;
  const blog = blogs.find((blog) => blog.id === Number(id));
  const { title, body } = blog;
  if (!blog) {
    return <p className="text-red-500">Blog not found</p>;
  }

  return (
    <div className="flex flex-col min-h-[50vh] items-center justify-center">
      <div className="max-w-2xl bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02]">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 whitespace-pre-line">{body}</p>

        <div className="mt-6">
          <Link href="/blogs" className="text-indigo-500 hover:underline">
            Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
