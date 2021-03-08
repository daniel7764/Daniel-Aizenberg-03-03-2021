import React from 'react';

import { Item } from 'Models/Item';

export interface StoreItemsContextType {
    storeItems: Item[];
    setStoreItems: React.Dispatch<React.SetStateAction<Item[]>>;
}