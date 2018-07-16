import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  media: {
    width: '100%',
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null, expanded: false };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, children } = this.props;
    if (this.state.errorInfo) {
      return (
        <div>
          <Card className={classes.card}>
            <CardHeader subheader="Please use action buttons see Technical details about the error" />
            <CardMedia
              className={classes.media}
              image="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
              title="Contemplative Reptile"
            />
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2">
                  Technical Details: {this.state.error.message.toString()}
                </Typography>
                <Typography variant="caption">
                  {this.state.error.stack.toString()}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      );
    }
    // Normally, just render children
    return children;
  }
}

ErrorBoundary.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default withStyles(styles)(ErrorBoundary);
