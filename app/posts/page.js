import { Suspense } from 'react';
import Post from '../components/Post';
import PostLoading from '../components/PostLoading';
import Section from '../components/Section';

export default function Posts() {
  return (
    <Section>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <Suspense fallback={<PostLoading />}>
        <Post />
      </Suspense>
    </Section>
  );
}
