import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    toolBar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    tabsColor: {
        backgroundColor: 'white',
    },
    defaultLink: {
        backgroundColor: 'white',
        color: 'black',
    }
}));

export default useStyles;