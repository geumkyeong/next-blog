import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

const root = process.cwd();
// 파일 목록 불러오기
export async function getFiles(type) {
  // read file list
  const files = fs.readdirSync(path.join(root, "data", type));

  return files;
}

// 특정 slug와 일치하는 post 가져오기
export async function getFileBySlug(type, slug) {
  // get post by slug
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  // parse raw string to front-matter
  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeHighlight,
      ],
    },
  });

  // front-matter, content
  return {
    mdxSource,
    frontMatter: {
      slug: slug || null,
      ...data,
    },
  };
}

// 모든 post의 세부 정보(제목, 설명, 게시일)를 가져오기
export async function getAllFilesFrontMatter(type) {
  // get front-matter from each posts
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((posts, slug) => {
    const source = fs.readFileSync(path.join(root, "data", type, slug), "utf8");

    const { data } = matter(source); // parse to front-matter

    // front-matter
    return [
      {
        slug: slug.replace(".mdx", ""),
        ...data,
      },
      ...posts,
    ];
  }, []);
}
