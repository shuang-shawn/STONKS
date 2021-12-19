import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';



export const UserRecommendedStocks = ({ stock, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  return (
  
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ maxWidth: '100%' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell >
               Ticker
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Price
                </TableCell>
        
              </TableRow>

            </TableHead>
            <TableBody>
              {stock.slice(0, limit).map((stock) => (
                <TableRow
                  hover
                  key={stock.ticker}
                //   selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
       

                  <TableCell>
                    <Box
                      sx={{
                    
                        alignItems: 'center',
                        display: 'flex'
                      }}

                    >
                      <Avatar
                        src={stock.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                   
                      </Avatar>

                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {stock.ticker}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {stock.name}
                  </TableCell>
                  <TableCell>
                    {stock.price}
                  </TableCell>
   
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

UserRecommendedStocks.propTypes = {
  stock: PropTypes.array.isRequired
};


