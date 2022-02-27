import { Container, Grid } from "@mui/material"
import OrderBook from "./orderBook/OrderBook"
import OrderBookSelectBox from "./market/Market"
import { useState } from "react"
import AddMarket from "./market/AddMarket"

export enum EContainer {
    TRADE = 'trade',
    ADD_MARKET = 'addMarket',
    HISTORY = 'history'
}

const Trade = () => {

    const [selectedContainer, setSelectedContainer] = useState<EContainer>(EContainer.TRADE)

    return(
        <Container sx={{
            bgcolor: "background.paper",
            width: '100%',
            borderRadius: 2,
            p: 2,
            boxShadow: 2
        }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
            >
                {
                    selectedContainer === EContainer.TRADE && (
                        <Grid item>
                            <OrderBookSelectBox setSelectedContainer={setSelectedContainer} />
                        </Grid>
                    )
                }
                {
                    selectedContainer === EContainer.TRADE && (
                        <Grid item>
                            <OrderBook />
                        </Grid>
                    )
                }
                {
                    selectedContainer === EContainer.ADD_MARKET && (
                        <Grid item>
                            <AddMarket setSelectedContainer={setSelectedContainer} />
                        </Grid>
                    )
                }
                
            </Grid>
        </Container>
    )
}

export default Trade