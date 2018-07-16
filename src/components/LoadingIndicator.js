import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const LoadingIndicator = () => <div>
    <CircularProgress color="secondary" />
    <Typography variant="caption" gutterBottom align="center">
        Loading Weather Information...
    </Typography>
</div>;

export default LoadingIndicator;