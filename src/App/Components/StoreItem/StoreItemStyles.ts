import { makeStyles } from '@material-ui/core';

const usetyles = makeStyles(() => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2vh 1vw',
        width: '16vw',
    },
    row: {
      display: 'flex',
    },
    description: {
      marginLeft: '0.25vw',
    },
    currencySwitch: {
        marginLeft: '-0.5vw'
    }
}));

export default usetyles;