import axios from 'axios';
import Swal from 'sweetalert2';
import React, { useContext } from 'react';

import { Item } from 'Models/Item';
import { apiUrl } from '../../../config.json';
import { StoreItemsContext} from 'Context/StoreItemsContext';
import {ExchangeRatesResponse} from 'Models/ExchangeRatesResponse';
import { StoreItemsContextType } from 'Context/StoreItemsContextType';

const USD_SYMBOL = 'USD';
const ILS_SYMBOL = 'ILS';
const OK_STATUS = 200;

const useItemsList = (parameters: useItemsListInCome): useItemsListOutCome => {
    const { storeItems, setStoreItems } = useContext(StoreItemsContext) as StoreItemsContextType;
    const { shekelToUSDExchangeRate, setShekelToUSDExchangeRate} = parameters;

    const updateNotReceivedItemsList = (receivedId: number) => {
        const receivedItemIndex: number = storeItems.findIndex((i: Item) => i.id === receivedId);
        if(receivedItemIndex !== -1) {
            const updatedStoreItems: Item[] = storeItems;
            updatedStoreItems[receivedItemIndex] = {
                ...updatedStoreItems[receivedItemIndex],
                isReceived: true
            };
            setStoreItems([...updatedStoreItems]);
        }
    }

    const getSortedItems = (): Item[] => {
        return storeItems.slice().sort((itemA: Item, itemB: Item) => itemA.deliveryDate.getTime() - itemB.deliveryDate.getTime());
    }

    const getCurrExChangeRates = async () => {
        try {
            const apiResponse = await axios.get(
                `${apiUrl}?base=${ILS_SYMBOL}&symbols=${USD_SYMBOL}`);
            if(apiResponse.status !== OK_STATUS) {
                fetchingErrorMsg();
            } else {
                const exchangeRateResponse: ExchangeRatesResponse = apiResponse.data;
                exchangeRateResponse.rates.USD !== shekelToUSDExchangeRate &&
                setShekelToUSDExchangeRate(exchangeRateResponse.rates.USD);
            }
        } catch (exception) {
            fetchingErrorMsg();
        }
    }

    const fetchingErrorMsg = () => {
        return Swal.fire({
            icon: 'error',
            title: 'Error in fetching exchange rates!'
        });
    }

    return { updateNotReceivedItemsList, getCurrExChangeRates, getSortedItems };
}

interface useItemsListInCome {
    shekelToUSDExchangeRate: number;
    setShekelToUSDExchangeRate: React.Dispatch<React.SetStateAction<number>>;
}

interface useItemsListOutCome {
    updateNotReceivedItemsList: (receivedId: number) => void;
    getCurrExChangeRates: () => void;
    getSortedItems: () => Item[];
}

export default useItemsList;