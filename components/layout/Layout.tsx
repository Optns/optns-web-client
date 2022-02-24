import { ThemeProvider } from "@emotion/react"
import { Container, Grid } from "@mui/material"
import { height } from "@mui/system"
import darkTheme from "../../theme"
import Header from "../header/Header"
import Trade from "../trade/Trade"

const Layout = () => {

    return(
        <ThemeProvider theme={darkTheme}>
            <Container maxWidth={false} sx={{
                bgcolor: "background.default",
                minWidth: "100vw",
                minHeight: "100vh",
                p: 2
            }}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center">
                    <Grid container direction="column" sx={{ maxWidth: '780px'}} >
                        <Header></Header>
                        <Trade />
                    </Grid>
                </Grid>
               

            </Container>
        </ThemeProvider>
    )
}

export default Layout