import React from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';

import useStyles from './StoreToolBarStyles';

import { TabObj } from 'Models/TabObj';
import StoreItemsProvider from 'Context/StoreItemsContext';
import ItemsList from '../../commons/ItemsList/ItemsList';
import StoresList from '../../commons/StoresList/StoresList';


const StoreToolBar: React.FC<Props> = (storeToolBarProps: Props): JSX.Element => {
    const classes = useStyles();
    const tabs: TabObj[] = [
        {
            tabId: 0,
            name: 'stores',
            displayComponent: <StoresList />
        },
        {
            tabId: 1,
            name: 'Items',
            displayComponent: <ItemsList showButton={storeToolBarProps.displayBought}/>
        }];
    const [currentTab, setCurrentTab] = React.useState<number>(0);

    return (
        <>
             <AppBar position="static" className={classes.toolBar}>
                 <Tabs centered value={currentTab}>
                     {
                         tabs.map((tab: TabObj) => {
                             return (
                                 <Tab
                                     onClick={() => setCurrentTab(tab.tabId)}
                                     key={tab.tabId}
                                 />
                             )
                         })
                     }
                 </Tabs>
            </AppBar>
            <>
                <StoreItemsProvider>
                    {tabs[currentTab].displayComponent}
                </StoreItemsProvider>
            </>
        </>
    );
}

interface Props {
    displayBought: boolean;
}

export default StoreToolBar;