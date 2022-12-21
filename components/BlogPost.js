import Link from "next/link";
import styled from "styled-components";
import { StyledCard } from "./styles/Card.styled";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;

const Span = styled.span`
  color: #A0AEC0;
`

const BlogPost = ({ title, publishedAt, summary, slug }) => {
  return (
    <StyledCard>
      <Title>
        <Link href={`posts/${slug}`}>
          <h3>{title}</h3>
        </Link>
        <Span>{publishedAt}</Span>
      </Title>
      <p>{summary}</p>
    </StyledCard>
  );
};

export default BlogPost;
