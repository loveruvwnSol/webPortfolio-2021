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
import { Header } from "../components/header";
import { TopAbout } from "../components/about";
import { TopWorks } from "../components/works";
import { TopContact } from "../components/contact";
import { Footer } from "../components/footer";

const Index = () => (
  <Box>
    <Box>
      <Header />
    </Box>
    <Box>
      <TopAbout />
    </Box>
    <Box>
      <TopWorks />
    </Box>
    <Box>
      <TopContact />
    </Box>
    <Box>
      <Footer />
    </Box>
    
  </Box>
);

export default Index;
