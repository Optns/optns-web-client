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
                alignItems="center"
                spacing={1}
                sx={{
                    paddingTop: 2
                }}
            >
                <Grid item>
                    <OrderBookSelectBox />
                </Grid>
                <Grid item xs={12}>
                    <OrderBook />
                </Grid>

            </Grid>
        </Container>
    )
}

export default Trade