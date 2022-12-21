import Link from "next/link";
import { StyledLink, StyledNavBar } from "./styles/NavBar.styled";

const NavBar = () => {
  return (
    <StyledNavBar>
      <Link href="/">
        <StyledLink>Home</StyledLink>
      </Link>
      <Link href="/posts">
        <StyledLink>Blog</StyledLink>
      </Link>
    </StyledNavBar>
  );
};

export default NavBar;
