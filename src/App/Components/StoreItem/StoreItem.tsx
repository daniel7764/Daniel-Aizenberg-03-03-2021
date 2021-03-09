import React, {useEffect, useState} from 'react';
import { LocalShipping, Storefront, Money, AttachMoney, ShoppingBasket } from '@material-ui/icons';
import {Button, Card, CardActions, CardContent, Divider, Grid, Switch, Typography} from '@material-ui/core';

import { Item } from 'Models/Item';

import usetyles from './StoreItemStyles';

const StoreItem: React.FC<Props> = (itemProps: Props): JSX.Element => {
    const { currItem, showReceivedButton, receiveItem, exchangeRate } = itemProps;
    const [ILSChecked, setILSChecked] = useState<boolean>(true);
    const classes = usetyles();

    useEffect(() => {
        currItem.priceUSD = currItem.priceILS * exchangeRate;
    },[exchangeRate]);

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setILSChecked(event.target.checked);
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <div className={classes.row}>
                    <ShoppingBasket />
                    <Typography className={classes.description}>{currItem.name}</Typography>
                </div>
                <div className={classes.row}>
                    <Storefront />
                    <Typography className={classes.description}>{currItem.store.name}</Typography>
                </div>
                <div className={classes.row}>
                    <LocalShipping />
                    <Typography className={classes.description}>
                        Delivery Date: {currItem.deliveryDate.toDateString()}
                    </Typography>
                </div>
                <div className={classes.row}>
                    <Money />
                    <Typography className={classes.description}>
                        Price: {ILSChecked ? currItem.priceILS.toFixed() : currItem.priceUSD.toFixed()}
                    </Typography>
                </div>
                <div className={classes.row}>
                    <Grid component='label' container alignItems='center' spacing={1} className={classes.currencySwitch}>
                        <Grid item><AttachMoney /></Grid>
                        <Grid item>USD</Grid>
                        <Grid item>
                            <Switch
                                checked={ILSChecked}
                                color={'primary'}
                                onChange={handleCurrencyChange}
                            />
                        </Grid>
                        <Grid item>ILS</Grid>
                    </Grid>
                </div>
            </CardContent>
            {showReceivedButton &&
                <CardActions>
                    <Divider />
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