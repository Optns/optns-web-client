import { Grid, Typography } from "@mui/material"
import Image from "next/image"
import ConnectWalletButton from "../trade/connectWallet/ConnectWalletButton"
import logo from "./../../public/optn-white-transparent.png"

const Header = () => {
    

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <Grid container justifyContent="center" alignItems="center" spacing={0}>
                    <Grid item>
                        <Image src={logo} alt="Optns Logo" width={35} height={35} />
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" sx={{
                            color: 'text.primary'
                        }}>Optns</Typography>
                    </Grid>
                </Grid> 
            </Grid>
            <Grid item>
                <ConnectWalletButton />
            </Grid>

        </Grid>
    )
}

export default Header