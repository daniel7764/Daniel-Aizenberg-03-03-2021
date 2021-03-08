import React from 'react';

import StoreToolBar from '../StoreToolBar/StoreToolBar';

const ReceivedItems: React.FC = (): JSX.Element => {
    return (
        <StoreToolBar displayBought={false}/>
    );
}

export default ReceivedItems;