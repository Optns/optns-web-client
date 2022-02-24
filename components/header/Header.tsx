import { Grid } from "@mui/material"
import Logo from "../common/Logo"
import ConnectWalletButton from "../trade/connectWallet/ConnectWalletButton"

const Header = () => {
    

    return (
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item>
                <Logo />
            </Grid>
            <Grid item>
                <ConnectWalletButton />
            </Grid>
        </Grid>
    )
}

export default Header