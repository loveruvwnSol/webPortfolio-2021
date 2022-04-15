import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function Blog({ content }) {
  const { attributes } = content;
  return (
    <Box>
      <Text>{attributes.title}</Text>
      <Text>world</Text>
    </Box>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:1337/api/blogs/1");
  const json = await res.json();
  return {props:{ content: json["data"] }};
};

export default Blog;
