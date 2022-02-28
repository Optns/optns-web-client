import { Box, Divider, IconButton, Stack, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import PublishIcon from '@mui/icons-material/Publish';
import { ethers } from "ethers";
import OrderBookTablet from "./OrderBookTablet";

const SearchToken = () => {
    const [inputAddress, setInputAddress] = useState<string | null>(null)
    const [results, setResults] = useState<ChainOrderBook | null>(null)

    useEffect(() => {
        // get order book details by orderBookAddress
    }, [inputAddress])

    const handleChange = (event: any) => {
        if (ethers.utils.isAddress(event.currentTarget.value)) {
            setInputAddress(event.currentTarget.value)
        } else {
            inputAddress && setInputAddress(null)
        }
    }

    console.log("inputAddress: ", inputAddress)

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <TextField
                    label="Enter Token Name or Address"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    sx={{
                        width: '100%'
                    }} />
            </Box>
            {inputAddress != null &&
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    sx={{
                        paddingTop: 2
                    }}
                >
                    {
                        orderBooks.map(orderbook => {
                            if (orderbook.token === inputAddress) {
                                return <OrderBookTablet key={orderbook.orderBookAddress} />
                            }
                        })
                    }
                </Stack>
            }
        </Box>
    )
}

export default React.memo(SearchToken)

type ChainOrderBook = {
    orderBookAddress: string,
    token: string,
    baseCurrency: string,
    oracle: string,
    amount: number,
    durationInBlocks: number
}

const orderBooks: ChainOrderBook[] = [
    {
        orderBookAddress: "0x843289423798472389723489723497",
        token: "0x08c4766d591a516F1dd63537E49cd1f56369358C",
        baseCurrency: "0x436551365153563551531",
        oracle: "0x64651563451346551346551123",
        amount: 100,
        durationInBlocks: 3000
    },
    {
        orderBookAddress: "0x904238902348904238908234",
        token: "0x08c4766d591a516F1dd63537E49cd1f56369358C",
        baseCurrency: "0x436551365153563551531",
        oracle: "0x64651563451346551346551123",
        amount: 50,
        durationInBlocks: 1000
    }
]

const savedOrderBooks = [
    {
        orderBookAddress: "0x31231231231231231331",
        token: "0x6465156345134655134655113",
        baseCurrency: "0x436551365153563551541",
        tokenName: "WETH",
        baseCurrencyName: "USDC",
        amount: 100,
        durationInBlocks: 3000
    }
]
