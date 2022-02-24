import { Container, Grid } from "@mui/material"
import OrderBook from "./orderBook/OrderBook"
import OrderBookSelectBox from "./orderBookSelect/orderBookSelectBox"

const Trade = () => {
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
                <Grid item>
                    <OrderBookSelectBox />
                </Grid>
                <Grid item>
                    <OrderBook />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Trade