import InfoIcon from '@mui/icons-material/Info';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Typography } from '@mui/material';

interface IOrderbookTooltip {
  address: string
}

const OrderbookTooltip: React.FC<IOrderbookTooltip> = (props) => {

    const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: 'primary.main',
          maxWidth: 220,
          border: '1px solid #dadde9',
        },
      }));

    return(
        <HtmlTooltip
            title={
            <React.Fragment>
                <Typography color="inherit">Orderbook details</Typography>
                <Typography>

                </Typography>
            </React.Fragment>
            }
        >
            <InfoIcon />
        </HtmlTooltip>
    )
}

export default OrderbookTooltip