import { Divider, Grid, Typography, IconButton, Paper, Box, Popper, Fade, Button } from "@mui/material"
import { ethers } from "ethers"
import { FC, useEffect, useRef, useState } from "react"
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { EContainer } from "../Trade";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useTheme, styled } from '@mui/material/styles';
import SelectTokenPoper from "./SelectTokenPoper";

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
    const [selectAddressAnchorEl, setSelectAddressAnchorEl] = useState<HTMLElement | null>(null)
    const selectAddressPopperRef = useRef<HTMLFormElement | null>(null)
    const openSelectAddress = Boolean(selectAddressAnchorEl)

    useEffect(() => {
        if (selectAddressAnchorEl) {
            document.addEventListener("click", handleClickOutsidePopper, true)
        }
        else {
            document.removeEventListener("click", handleClickOutsidePopper, true)
        }

        return (() => {
            document.removeEventListener("click", handleClickOutsidePopper, true)
        })
    }, [selectAddressAnchorEl])

    const handleClickOutsidePopper = (event: any) => {
        if (
            selectAddressPopperRef.current
            && !selectAddressPopperRef.current.contains(event.target)
        ) {
            setSelectAddressAnchorEl(null)
        }
    }

    const handleClickSelectAddress = (event: React.MouseEvent<HTMLElement>) => {
        setSelectAddressAnchorEl(selectAddressAnchorEl ? null : event.currentTarget)
    }

    return (
        <Box ref={selectAddressPopperRef}>
            <Grid
                container direction="column"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    color: 'primary.main',
                    p: 0,
                    position: 'relative'
                }}>
                <Paper
                    component="form"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                    <IconButton
                        onClick={() => props.setSelectedContainer(EContainer.ADD_MARKET)}
                        sx={{
                            borderRadius: 2
                        }}>
                        <AddIcon color='primary' />
                    </IconButton>
                    <Divider orientation="vertical" sx={{ height: 28, m: 0.5 }} />
                    <Button onClick={handleClickSelectAddress} sx={{
                        paddingLeft: 1,
                        width: '100%'
                    }}>
                        Select orderbook
                    </Button>
                </Paper>
                {openSelectAddress && <SelectTokenPoper />}
            </Grid>
        </Box>
    )
}

const orderbooks = [
    '0x392AAAedce2c5f873D4C7f232af02Ac43F67274B'
]

export default React.memo(OrderBookSelectBox)