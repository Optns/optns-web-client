import { ThemeProvider } from "@emotion/react"
import { Container, Grid } from "@mui/material"
import { height } from "@mui/system"
import darkTheme from "../../theme"
import Header from "../header/Header"
import Trade from "../trade/Trade"

const Layout = () => {

    return(
        <ThemeProvider theme={darkTheme}>
            <Container sx={{
                bgcolor: "background.default",
                minWidth: "100vw",
                minHeight: "100vh"
            }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        minWidth: "100vw",
                        minHeight: "100vh"
                    }}
                >
                    <Grid item sx={{
                        width: '60%',
                        minWidth: '576px'
                    }}>
                        <Grid container direction="column" sx={{
                           
                        }}>
                            <Header></Header>
                            <Trade />
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </ThemeProvider>
    )
}

export default Layout