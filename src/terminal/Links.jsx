const { default: styled } = require("@emotion/styled");

const Link = styled.a`
  text-decoration: none;
  color: Pink;
  &:hover {
    color: DeepPink;
  }
`;

export default Link;