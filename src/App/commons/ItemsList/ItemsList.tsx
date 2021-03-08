import React, {useContext, useEffect, useState} from 'react';

import useItemsList from './useItemsList';

import { Item } from 'Models/Item';
import StoreItem from '../StoreItem/StoreItem';
import {StoreItemsContext} from 'Context/StoreItemsContext';
import {StoreItemsContextType} from 'Context/StoreItemsContextType';

const ItemsList: React.FC<Props> = (itemsListProps: Props): JSX.Element => {
    const { storeItems } = useContext(StoreItemsContext) as StoreItemsContextType;
    const [shekelToUSDExchangeRate, setShekelToUSDExchangeRate] = useState<number>(0);
    const { updateNotReceivedItemsList, getCurrExChangeRates } = useItemsList({ shekelToUSDExchangeRate, setShekelToUSDExchangeRate });

    useEffect((() => {
        getCurrExChangeRates();
        const interval = setInterval(() => {
            getCurrExChangeRates();
        }, 10000);
        return () => clearInterval(interval);
    }));

    return (
        <div>
            {
                storeItems.map((singleItem: Item) =>
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
