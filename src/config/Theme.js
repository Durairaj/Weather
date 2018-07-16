import {createMuiTheme} from '@material-ui/core/styles';

const weatherTheme = createMuiTheme({
    overrides: {
        breakpoints: {
            keys: ['xs', 'sm', 'md', 'lg', 'xl'],
            values: {
                xs: 360,
                sm: 600,
                md: 960,
                lg: 1366,
                xl: 1920,
            },
        },
    },

});
const infoColor = "#00acc1";

export {
    weatherTheme,
    infoColor,
}