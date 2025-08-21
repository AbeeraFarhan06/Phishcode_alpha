import { Grid, GridItem } from '@chakra-ui/react';
import Overview from '../components/Overview';
import Risk from '../components/Risk';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main" `,
        lg: `"main" `, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="main">
        <Overview />
      </GridItem>
    </Grid>
  );
};

export default HomePage;