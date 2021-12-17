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
  import { WorksStudyITpassport } from "../components/WorksPages/studyITpassport";

  const studyITpassport = () => (
    <Box>
      <Box>
        <WorksHeader />
      </Box>
      <Box>
        <WorksStudyITpassport />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
  
  export default studyITpassport;