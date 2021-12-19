import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { UserPotentialStocks } from '../components/portfolio/user-potential-stocks';
import { CustomerListToolbar } from '../components/portfolio/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { ownedStocks } from '../__mocks__/ownedStocks';

const Portfolio = () => (
  <>
    <Head>
      <title>
        Customers | Material Kit
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
         <UserPotentialStocks stock={ownedStocks} sx={{mx:8}}/>
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
