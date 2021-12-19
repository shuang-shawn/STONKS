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
// import Stock from './Stock'
import * as React from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const UserPotentialStocks = ({ stock, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (

    <Card {...rest}>
<h2>Potential Stocks</h2>

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
                      onClick={handleOpen}
                    >
                      <Avatar
                        src={stock.logo}
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
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {stock.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {/* <Stock /> */}
          </Typography>
          
          </Box>

      </Modal>
      </PerfectScrollbar>

    </Card>

  );

};

UserPotentialStocks.propTypes = {
  stock: PropTypes.array.isRequired
};


