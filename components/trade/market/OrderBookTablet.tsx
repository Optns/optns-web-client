import { Box, Button, Paper, styled, Typography } from "@mui/material";
import React from "react"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '98%',
    borderRadius: 5
}));

const Link = styled('a')(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    "&:hover": {
        color: theme.palette.primary.main
    }
}))

const OrderBookTablet = () => {

    const handleClick = () => {

    }

    return (
        <Item >
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingInline: 1
            }}>
                <Box sx={{ display: 'flex' }}>
                    <Link href="" target="_blank" onClick={handleClick}>WETH</Link>
                    <Typography sx={{ paddingInline: 1 }}>/</Typography>
                    <Link href="" target="_blank" onClick={handleClick}>USDC</Link>
                </Box>
                <Typography>100</Typography>
                <Typography>2000 blocks</Typography>
                <Link href="" target="_blank" onClick={handleClick}>0x3232...321</Link>
            </Box>
        </Item>
    )
}

export default React.memo(OrderBookTablet)