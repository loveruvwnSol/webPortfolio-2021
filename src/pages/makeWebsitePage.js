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
import { WorksMakeWebsite } from "../components/WorksPages/makeWebsite";
const makeWebsite = () => (
  <Box>
    <Box>
      <WorksHeader />
    </Box>
    <Box>
      <WorksMakeWebsite />
    </Box>
    <Box>
      <Footer />
    </Box>
  </Box>
);

export default makeWebsite;
