import { getAllFilesFrontMatter } from '../../lib/mdx';
import BlogPost from '../../components/BlogPost';

export default function Blog({ posts }) {
  // Blog Post list
  return (
    <>
        <h2>Blog ({posts.length} posts)</h2>
        {posts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
    </>
  );
}

export async function getStaticProps() {
  // get front-matter from each posts
  const posts = await getAllFilesFrontMatter('blog');

  return {
    props: {
      posts,
    },
  };
}
