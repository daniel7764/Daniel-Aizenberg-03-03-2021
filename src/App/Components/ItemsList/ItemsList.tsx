import React, {useContext, useEffect, useState} from 'react';

import useItemsList from './useItemsList';

import { Item } from 'Models/Item';
import useStyles from './ListStyles';
import StoreItem from '../StoreItem/StoreItem';
import {StoreItemsContext} from 'Context/StoreItemsContext';
import {StoreItemsContextType} from 'Context/StoreItemsContextType';

const apiInterval = process.env.REACT_APP_API_INTERVAL;

const ItemsList: React.FC<Props> = (itemsListProps: Props): JSX.Element => {
    const classes = useStyles();
    const { storeItems } = useContext(StoreItemsContext) as StoreItemsContextType;
    const [shekelToUSDExchangeRate, setShekelToUSDExchangeRate] = useState<number>(0);
    const { updateNotReceivedItemsList, getCurrExChangeRates, getSortedItems } = useItemsList({ shekelToUSDExchangeRate, setShekelToUSDExchangeRate });

    useEffect((() => {
        getCurrExChangeRates();
        if(apiInterval) {
            const interval = setInterval(() => {
                getCurrExChangeRates();
            }, Number(apiInterval));
            return () => clearInterval(interval);
        }
    }));

    return (
        <div className={classes.mainList}>
            {
                getSortedItems().map((singleItem: Item) =>
                    (itemsListProps.showButton ? !singleItem.isReceived : singleItem.isReceived) &&
                        <StoreItem
                            currItem={singleItem}
                            showReceivedButton={itemsListProps.showButton}
                            receiveItem={updateNotReceivedItemsList}
                            exchangeRate={shekelToUSDExchangeRate}
                        />
                )
            }
        </div>
    );
}

interface Props {
    showButton: boolean;
}

export default  ItemsList;
