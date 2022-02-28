import { Box, IconButton, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import PublishIcon from '@mui/icons-material/Publish';
import { ethers } from "ethers";

const ImportOrderbook = () => {
    const [inputAddress, setInputAddress] = useState<string | null>(null)

    useEffect(() => {
        // get order book details by orderBookAddress
    }, [])

    const handleChange = (event: { currentTarget: { value: any; }; }) => {
        if (ethers.utils.isAddress(event.currentTarget.value)) {
            setInputAddress(event.currentTarget.value)
        } else {
            inputAddress && setInputAddress(null)
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <TextField
                    label="Orderbook Address"
                    variant="outlined"
                    placeholder="0x...."
                    size="small"
                    sx={{
                        width: '100%'
                    }} onChange={handleChange} />
                <IconButton sx={{
                    marginLeft: 2,
                    borderRadius: 2
                }}>
                    <PublishIcon sx={{ color: 'primary.main' }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default React.memo(ImportOrderbook)