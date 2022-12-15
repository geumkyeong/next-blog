const Container = ({ children }) => {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/posts">Blog</a>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default Container;
