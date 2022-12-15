import Link from 'next/link';

const Container = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/posts">Blog</Link>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default Container;
