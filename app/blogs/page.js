import Link from 'next/link';
import BlogItem from '../components/BlogItem';
import getBlogs from '../data/blogs';

export default function Blogs() {
  const blogs = getBlogs();

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
        <div className="grid gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`}>
              <BlogItem blog={blog} title={blog.title} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
