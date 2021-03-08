import React from 'react';

import useStyles from '../GeneralStyles';

import StoreToolBar from '../StoreToolBar/StoreToolBar';

const BoughtItems: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div className={classes.entireList}>
            <StoreToolBar displayBought={true}/>
        </div>
    );
}

export default BoughtItems;
