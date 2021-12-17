import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
  } from "@chakra-ui/react";
  import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
  import { Box } from "@chakra-ui/layout";
  import { Footer } from "../components/footer";
  import { WorksHeader } from "../components/WorksPages/worksHeader";
  import { WorksNewLanguage } from "../components/WorksPages/newLanguage";
  const newLanguage = () => (
    <Box>
      <Box>
        <WorksHeader />
      </Box>
      <Box>
        <WorksNewLanguage />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
  
  export default newLanguage;
  