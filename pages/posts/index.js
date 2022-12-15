import { getAllFilesFrontMatter } from '../../lib/mdx';
import Container from "../../components/Container";

export default function Blog({ posts }) {
  // Blog Post list
  return (
    <>
      <Container>
        <h2>Blog ({posts.length} posts)</h2>
        {posts.map((post) => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <hr />
          </div>
        ))}
      </Container>
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
