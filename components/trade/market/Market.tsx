import { Autocomplete, Box, Button, Divider, FormControl, FormHelperText, Grid, Icon, IconButton, InputBase, Modal, Paper, TextField, Typography } from "@mui/material"
import { ethers } from "ethers"
import { FC, useState } from "react"
import React from "react";
import OrderbookTooltip from "./MarketTooltip";
import Link from "next/link";
import AddMarketButton from "./AddMarketButton";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AddIcon from '@mui/icons-material/Add';
import { EContainer } from "../Trade";

type InputAddress = {
    address: string,
    valid: boolean
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IOrderBookSelectBox {
    setSelectedContainer(arg0: EContainer): void
}

const OrderBookSelectBox: FC<IOrderBookSelectBox> = (props) => {
    const [inputOrderbookAddress, setInputOrderbookAddress] = useState<InputAddress>()

    const isAddress = (address: string): boolean => {
        return ethers.utils.isAddress(address)
    }

    const openLinkEtherscan = () => {
        window.open(`https://etherscan.io/address/${inputOrderbookAddress!.address}`, '_blank')
    }

    return (
        <>
            <Grid container justifyContent="flex-start" alignItems="center" sx={{
                color: 'primary.main',
                p: 0
            }}>
                <Paper
                    component="form"
                    sx={{ display: 'flex', alignItems: 'center', width: '100%' }}
                    >
                    <Autocomplete
                        freeSolo
                        disableClearable
                        options={orderbooks.map((option) => option)}
                        defaultValue={orderbooks[0]}
                        onInputChange={(_, newInputValue) => {
                            isAddress(newInputValue)
                            ? setInputOrderbookAddress({
                                address: newInputValue,
                                valid: true
                            })
                            : setInputOrderbookAddress({
                                address: newInputValue,
                                valid: false
                            })
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="Address" />
                        )}
                        sx={{
                            width: '100%'
                        }}
                    />  
                    {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
                    <IconButton>
                        <AddIcon color='primary' onClick={() => props.setSelectedContainer(EContainer.ADD_MARKET)} />
                    </IconButton>
                </Paper>
            </Grid>
            {
                (!inputOrderbookAddress || inputOrderbookAddress.address.length === 0)
                ? <Typography fontSize="small"  sx={{ color: "primary.main" }}>
                    Please select or enter orderbook
                </Typography>
                : !inputOrderbookAddress.valid
                    && <Typography fontSize="small" sx={{ color: "error.main" }}>
                        Invalid address
                    </Typography>
                       
            }
        </>
    )
}

const orderbooks = [
    '0x392AAAedce2c5f873D4C7f232af02Ac43F67274B'
]

export default OrderBookSelectBox