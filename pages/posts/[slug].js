import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "../../layouts/blog";

export default function Blog({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </BlogLayout>
  );
}

// slug와 일치하는 post 가져오기
export async function getStaticProps({ params }) {
  const { slug } = params;
  // get post by slug
  const post = await getFileBySlug("blog", slug);

  return {
    props: post,
  };
}

// 모든 post의 slug를 접근 가능한 경로로 등록
export async function getStaticPaths() {
  // read file list
  const posts = await getFiles("blog");

  // add routes
  const paths = posts.map((post) => ({
    // extract slug from file name
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
