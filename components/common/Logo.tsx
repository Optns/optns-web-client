import Image from "next/image"
import logo from "./../../public/optn-white-transparent.png"
import { Typography, Grid } from '@mui/material'
import React from "react"

const Logo = () => {

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs="auto">
                <Image src={logo} alt="Optns Logo" width={35} height={35} />
            </Grid>
            <Grid item xs="auto">
                <Typography variant="body1" sx={{
                    color: 'text.primary'
                }}>Optns</Typography>
            </Grid>
        </Grid>
    )
}

export default React.memo(Logo)