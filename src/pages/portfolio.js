import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { UserPotentialStocks } from '../components/portfolio/user-potential-stocks';
import { UserRecommendedStocks } from '../components/portfolio/user-recommended-stocks';
import { CustomerListToolbar } from '../components/portfolio/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { ownedStocks } from '../__mocks__/ownedStocks';
import { recommendedStocks } from'../__mocks__/recommendedStocks';

const Portfolio = () => (
  <>
    <Head>
      <title>
        Portfolio
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <CustomerListToolbar sx={{mx: 20}}>

      </CustomerListToolbar>
      <Container  maxWidth={false} >
        <Box sx={{ mt: 3, display:'flex', justifyContent:'center'}}>
         <UserPotentialStocks stock={ownedStocks} sx={{mx:8}}/>
         <UserRecommendedStocks stock={recommendedStocks} sx={{mx:8}}/>
        </Box>
      </Container>
    </Box>
  </>
);
Portfolio.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Portfolio;
