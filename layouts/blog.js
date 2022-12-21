const BlogLayout = ({ frontMatter, children }) => {
  return (
    <>
      <h1>{frontMatter.title}</h1>
      {children}
    </>
  );
};

export default BlogLayout;
