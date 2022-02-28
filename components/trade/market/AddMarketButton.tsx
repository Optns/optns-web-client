import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const AddMarketButton = () => {

    return (
        <IconButton>
            <AddIcon color='primary' />
        </IconButton>
    )
}

export default React.memo(AddMarketButton)
