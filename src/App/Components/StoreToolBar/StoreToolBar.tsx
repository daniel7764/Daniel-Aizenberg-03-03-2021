import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {AppBar, Button, Tab, Tabs} from '@material-ui/core';

import useStyles from './StoreToolBarStyles';

import { TabObj } from 'Models/TabObj';
import ItemsList from '../ItemsList/ItemsList';
import StoreItemsProvider from 'Context/StoreItemsContext';
import StoresList from '../StoresList/StoresList';

const StoreToolBar: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const isItemsList: boolean = useLocation().pathname === '/list';
    const [currentTab, setCurrentTab] = React.useState<number>(0);

    const tabs: TabObj[] = [
        {
            tabId: 0,
            name: 'Stores',
            displayComponent: <StoresList />
        },
        {
            tabId: 1,
            name: 'Items',
            displayComponent: <ItemsList showButton={isItemsList}/>
        }];

    return (
        <>
             <AppBar position="static" className={classes.toolBar}>
                 <Tabs centered value={currentTab} >
                     {
                         tabs.map((tab: TabObj) => {
                             return (
                                 <Tab
                                     onClick={() => setCurrentTab(tab.tabId)}
                                     key={tab.tabId}
                                     label={tab.name}
                                 >
                                 </Tab>
                             )
                         })
                     }
                 </Tabs>
                <Button component={Link} to={isItemsList ? '/received' : '/'}>
                    {isItemsList ? 'TO RECEIVED ITEMS LIST' : 'TO STORE ITEMS LIST'}
                </Button>
            </AppBar>
            <StoreItemsProvider>
                {tabs[currentTab].displayComponent}
            </StoreItemsProvider>
        </>
    );
}

export default StoreToolBar;