import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, CardActionArea, CardActions, ButtonBase, Paper } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
// import "./model-card.css";

const constructor = () => {
    this.state = {
        selected: "abc",
    }

}

export const ModelCard = ({ model, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  ><Paper >
      <CardActionArea id={model.name} 
      onClick={event => {document.getElementById(model.name).style.backgroundColor = "grey"}}>
    <CardContent >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Product"
          src={model.media}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {model.name}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {model.description}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    </CardActionArea>
    </Paper>
  </Card>
);

ModelCard.propTypes = {
  model: PropTypes.object.isRequired
};
