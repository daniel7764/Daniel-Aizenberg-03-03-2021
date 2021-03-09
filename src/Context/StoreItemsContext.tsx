import React, { useState } from 'react';

import { Item } from 'Models/Item';
import { allStores } from 'App/Components/StoresList/StoresList';

import { StoreItemsContextType } from './StoreItemsContextType';

export const allStoreItems: Item[] = [
    {
        id: 0,
        name: 'Iphone 12',
        deliveryDate: new Date('2021-04-01'),
        isReceived: false,
        priceILS: 100,
        priceUSD: 0,
        store: allStores[0]
    },
    {
        id: 1,
        name: 'GoPro',
        deliveryDate: new Date('2020-10-11'),
        isReceived: false,
        priceILS: 100,
        priceUSD: 0,
        store: allStores[1]
    },
    {
        id: 2,
        name: 'Garmin Watch',
        deliveryDate: new Date('2021-02-11'),
        isReceived: true,
        priceILS: 100,
        priceUSD: 0,
        store: allStores[2]
    }
];

export const StoreItemsContext = React.createContext<StoreItemsContextType | null>(null);

const StoreItemsProvider: React.FC= ({ children }) => {
    const [storeItems, setStoreItems] = useState<Item[]>(allStoreItems);

    return (
        <StoreItemsContext.Provider value={{storeItems, setStoreItems}}>
            { children }
        </StoreItemsContext.Provider>
    );
}

export default StoreItemsProvider;