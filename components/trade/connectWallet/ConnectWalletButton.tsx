import { Button, Grid, Typography } from "@mui/material"
import { ethers } from "ethers";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import matamask from  "./../../../public/metamask.png"


const ConnectWalletButton = () => {
    const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>()
    const [address, setAddress] = useState<string>()

    useEffect(() => {
        if (signer) {
            getAddressCallback()
        }
    }, [signer])

    const getAddressCallback = useCallback(async() => {
        if (signer){
            const address = await signer.getAddress()
            setAddress(address)
        }
    }, [signer])
    
    
    const handleConnectButtonClick = useCallback( async () => {
        // A Web3Provider wraps a standard Web3 provider, which is
        // what MetaMask injects as window.ethereum into each page
        const provider = new ethers.providers.Web3Provider((window as any).ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner()

        setSigner(signer)
    }, [])

    return (
        <Button onClick={handleConnectButtonClick}>
            {
                address 
                ? <Grid container spacing={1}>
                    <Grid item>
                        <Image width={20} height={20} src={matamask} alt="Metamask" />
                    </Grid>
                    <Grid item>
                        {`${address.substring(0, 6)}....${address.substring(address.length - 4)}`}
                    </Grid>
                </Grid>
                : `Connect Wallet`
            }
        </Button>
    )
}

export default ConnectWalletButton