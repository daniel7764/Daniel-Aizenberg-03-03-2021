import React from 'react';

import useStoresList from './useStoresList';

import { Store } from 'Models/Store';
import StoreCard from '../Store/StoreCard';
import useStyles from '../ItemsList/ListStyles';

export const allStores: Store[] = [
    {
        id: 1,
        name: 'Amazon'
    },
    {
        id: 2,
        name: 'eBay'
    },
    {
        id: 3,
        name: 'Ali Express'
    }];

const StoresList: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const { getNumberOfStoreProducts } = useStoresList();

    return (
        <div className={classes.mainList}>
            {
                allStores.map((currStore: Store) => {
                    return <StoreCard currStore={currStore} numOfItems={getNumberOfStoreProducts(currStore.id)} />
                })
            }
        </div>
    );
}

export default  StoresList;