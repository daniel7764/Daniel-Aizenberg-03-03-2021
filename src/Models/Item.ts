import { Store } from './Store';

export interface Item {
    id: number;
    name: string;
    priceILS: number;
    priceUSD: number;
    store: Store;
    deliveryDate: Date;
    isReceived: boolean;
}