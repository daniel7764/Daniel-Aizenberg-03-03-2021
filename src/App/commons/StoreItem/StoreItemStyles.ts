import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    itemCard: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2vh',
        width: '16vw',
    },
    currencyData: {
        display: 'flex',
        flexDirection: 'row',
    }
}));

export default useStyles;