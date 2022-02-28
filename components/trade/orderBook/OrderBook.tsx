import { Tabs, Tab, Divider, Stack, Paper, styled } from "@mui/material"
import { Box } from "@mui/system"
import React from "react";
import { useCallback, useState } from "react"
import SwipeableViews from 'react-swipeable-views';
import theme from "../../../theme";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    dir?: string;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const OrderBook = () => {
    const [value, setValue] = useState(0)

    const handleChange = useCallback((_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }, [])

    const handleChangeIndex = useCallback((index: number) => {
        setValue(index);
    }, [])

    const getIndicatorColorMap = useCallback((value: number): string => {
        const colors: { [index: number]: string } = {
            0: "green",
            1: "red",
            2: "#90caf9"
        }

        return colors[value] ?? "#90caf9"
    }, [])

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingTop: 1.2 }}>
                <Tabs value={value} onChange={handleChange} aria-label="Options Type"
                    textColor="inherit"
                    centered
                    variant="fullWidth"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: getIndicatorColorMap(value),
                        }
                    }}
                >
                    <Tab label="Call"  {...a11yProps(0)} sx={{
                        color: "success.main"
                    }} />
                    <Tab label="Put"  {...a11yProps(1)} sx={{
                        color: "error.main",
                    }} />
                    <Tab label="Sell"  {...a11yProps(2)} sx={{
                        color: "primary.main",
                    }} />
                </Tabs>
            </Box>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <Item>Item put 1</Item>
                        <Item>Item put 2</Item>
                        <Item>Item put 3</Item>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <Item>sell order</Item>
                    </Stack>
                </TabPanel>
            </SwipeableViews>
        </>
    )
}

export default React.memo(OrderBook)