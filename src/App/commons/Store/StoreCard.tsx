import React from 'react';
import { Card, Typography } from '@material-ui/core';

import { Store } from 'Models/Store';

const StoreCard: React.FC<Props> = (storeProps: Props): JSX.Element => {
    const { currStore, numOfItems } = storeProps;

    return (
        <Card>
            <Typography>{`${currStore.name}`}</Typography>
            <Typography>{numOfItems}</Typography>
        </Card>
    );
}

interface Props {
    currStore: Store;
    numOfItems: number;
}

export default StoreCard;

