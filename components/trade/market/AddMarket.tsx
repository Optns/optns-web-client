import { Button, Container, Grid, TextField, Typography } from "@mui/material"
import { FC } from "react"
import { EContainer } from "../Trade"

interface IAddMarket {
    setSelectedContainer(arg0: EContainer): void
}

const AddMarket: FC<IAddMarket> = (props) => {

    const handleCreate = () => {
        props.setSelectedContainer(EContainer.TRADE)
    }

    return (
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start   " sx={{
            color: 'primary.main',
            p: 1
        }}>
            <Typography sx={{paddingBottom: 2}}>Create new market</Typography>
            <TextField sx={{paddingBottom: 2}} fullWidth label="Put implementation address" />
            <TextField sx={{paddingBottom: 2}} fullWidth label="Call implementation address" />
            <TextField sx={{paddingBottom: 2}} fullWidth label="Oracle address" />
            <TextField sx={{paddingBottom: 2}} fullWidth label="Trade token address" />
            <TextField sx={{paddingBottom: 2}} fullWidth label="Base token address" />

            <Grid container>
                <Button onClick={() => props.setSelectedContainer(EContainer.TRADE)}>Cancel</Button>
                <Button onClick={handleCreate}>Create</Button>
            </Grid>
        </Grid>

    )
}

export default AddMarket