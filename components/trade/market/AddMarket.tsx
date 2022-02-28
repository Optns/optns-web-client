import { Box, Button, Container, Grid, IconButton, styled, TextField, Typography } from "@mui/material"
import React, { FC, useCallback } from "react"
import { EContainer } from "../Trade"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface IAddMarket {
    setSelectedContainer(arg0: EContainer): void
}

const AddressTextField = styled(TextField)(({ theme }) => ({
    paddingBottom: 20,
    width: '100%'
}))

const AddMarket: FC<IAddMarket> = (props) => {

    const handleCreate = useCallback(() => props.setSelectedContainer(EContainer.TRADE), [])

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
                color: 'primary.main',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: 'center',
                    marginBottom: 2
                }}>
                <IconButton
                    sx={{
                        borderRadius: 2,
                        color: 'primary.main'
                    }}
                    onClick={() => props.setSelectedContainer(EContainer.TRADE)}>
                    <KeyboardBackspaceIcon />
                </IconButton>
                <Typography sx={{ color: 'text.primary', paddingLeft: 1 }}>Create new market</Typography>
            </Box>
            <AddressTextField size="small" label="Put implementation address" />
            <AddressTextField size="small" label="Call implementation address" />
            <AddressTextField size="small" label="Oracle address" />
            <AddressTextField size="small" label="Trade token address" />
            <AddressTextField size="small" label="Base token address" />

            <Grid container>
                <Button onClick={handleCreate}>Create</Button>
            </Grid>
        </Grid>

    )
}

export default React.memo(AddMarket)