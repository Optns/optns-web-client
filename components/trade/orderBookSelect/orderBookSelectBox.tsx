import { Autocomplete, Button, FormControl, FormHelperText, Grid, Icon, TextField, Typography } from "@mui/material"
import { ethers } from "ethers"
import { useState } from "react"
import React from "react";
import OrderbookTooltip from "./OrderbookTooltip";
import Link from "next/link";

type InputAddress = {
    address: string,
    valid: boolean
}

const OrderBookSelectBox = () => {
    const [inputOrderbookAddress, setInputOrderbookAddress] = useState<InputAddress>()

    const isAddress = (address: string): boolean => {
        return ethers.utils.isAddress(address)
    }

    const openLinkEtherscan = () => {
        window.open(`https://etherscan.io/address/${inputOrderbookAddress!.address}`, '_blank')
    }

    return (
        <>
            <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{
                color: 'primary.main'
            }}>
                <Grid item>
                    <FormControl>
                        <Autocomplete
                            style={{
                                minWidth: '450px'
                            }}
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
                                <TextField
                                    {...params}
                                    label="Search Orderbook"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />  
                    </FormControl>
                </Grid>
                <Grid item>
                    {
                        inputOrderbookAddress && inputOrderbookAddress.valid
                        && <OrderbookTooltip address={inputOrderbookAddress?.address} />
                    }
                </Grid>
            </Grid>
            {
                (!inputOrderbookAddress || inputOrderbookAddress.address.length === 0)
                ? <FormHelperText sx={{ color: "primary.main" }}>
                    Please select or enter orderbook
                </FormHelperText>
                : !inputOrderbookAddress.valid
                    ? <FormHelperText sx={{ color: "error.main" }}>
                        Invalid address
                    </FormHelperText>
                    : <FormHelperText onClick={openLinkEtherscan} style={{cursor: 'pointer'}} sx={{ color: 'primary.main'}}>
                        {
                            `Etherscan: ${
                                inputOrderbookAddress.address.substring(0,6)
                            }....${
                                inputOrderbookAddress.address.substring(inputOrderbookAddress.address.length - 4)
                            }`
                        }
                    </FormHelperText>
                       
            }
        </>
    )
}

const orderbooks = [
    '0x392AAAedce2c5f873D4C7f232af02Ac43F67274B'
]

export default OrderBookSelectBox