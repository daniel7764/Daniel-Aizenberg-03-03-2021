import React from 'react';
import { Card, Typography } from '@material-ui/core';

import useStyles from './StoreCardStyles';

import { Store } from 'Models/Store';

const StoreCard: React.FC<Props> = (storeProps: Props): JSX.Element => {
    const classes = useStyles();
    const { currStore, numOfItems } = storeProps;

    return (
        <Card className={classes.store}>
            <Typography>{`Store Name: ${currStore.name}`}</Typography>
            <Typography>{`Number of Current Items: ${numOfItems}`}</Typography>
        </Card>
    );
}

interface Props {
    currStore: Store;
    numOfItems: number;
}

export default StoreCard;

