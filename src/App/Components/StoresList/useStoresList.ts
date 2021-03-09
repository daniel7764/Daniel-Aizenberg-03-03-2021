import { useContext } from 'react';

import { Item } from 'Models/Item';
import { StoreItemsContext } from 'Context/StoreItemsContext';
import { StoreItemsContextType } from 'Context/StoreItemsContextType';

const useStoreList = (): useStoreListOutCome => {
    const { storeItems } = useContext(StoreItemsContext) as StoreItemsContextType;

    const getNumberOfStoreProducts = (currStoreId: number) => {
        return storeItems.filter((currItem: Item) => currItem.store.id === currStoreId).length;
    }

    return { getNumberOfStoreProducts };
}

interface useStoreListOutCome {
    getNumberOfStoreProducts: (currStoreId: number) => number;
}

export default useStoreList;