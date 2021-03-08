import React, {useEffect, useState} from 'react';
import {Button, Card, CardActions, CardContent, Switch, Typography} from '@material-ui/core';

import { Item } from 'Models/Item';

import useStyles from './StoreItemStyles';

const StoreItem: React.FC<Props> = (itemProps: Props): JSX.Element => {
    const { currItem, showReceivedButton, receiveItem, exchangeRate } = itemProps;
    const [ILSChecked, setILSChecked] = useState<boolean>(true);
    const classes = useStyles();

    useEffect(() => {
        currItem.priceUSD = currItem.priceILS * exchangeRate;
    },[exchangeRate]);

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setILSChecked(event.target.checked);
    }

    return (
        <Card className={classes.itemCard}>
            <CardContent>
                <Typography>{currItem.name}</Typography>
                <Typography>{currItem.store.name}</Typography>
                <Typography>Delivery Date: {currItem.deliveryDate.getDate()}</Typography>
                <div className={classes.currencyData}>
                    <Typography>Price: ${ILSChecked ? currItem.priceILS : currItem.priceUSD}'</Typography>
                    <Typography>ILS</Typography>
                    <Switch
                        checked={ILSChecked}
                        color={'primary'}
                        onChange={handleCurrencyChange}
                    />
                    <Typography>USD</Typography>
                </div>
            </CardContent>
            {showReceivedButton &&
                <CardActions>
                    <Button onClick={() => receiveItem(currItem.id)}>Received</Button>
                </CardActions>
            }
        </Card>
    );
}

interface Props {
    currItem: Item;
    exchangeRate: number;
    showReceivedButton: boolean;
    receiveItem: (receivedId: number) => void;
}

export default StoreItem;