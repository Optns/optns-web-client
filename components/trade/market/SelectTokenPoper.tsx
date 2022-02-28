import { Paper, Box, Typography, Divider, Stack, Tab, Tabs, styled } from "@mui/material"
import React, { useCallback, useState } from "react"
import SwipeableViews from "react-swipeable-views"
import theme from "../../../theme"
import ImportOrderbook from "./ImportOrderbook";
import SearchToken from "./SearchToken";

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

const SelectTokenPoper = () => {
    const [value, setValue] = useState(0)

    const handleChange = useCallback((_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }, [])

    const handleChangeIndex = useCallback((index: number) => {
        setValue(index);
    }, [])

    return (
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: 5.5, position: 'absolute', opacity: 1, zIndex: 1 }}
        >
            <Box sx={{
                width: '100%'
            }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Options Type"
                        textColor="inherit"
                        centered
                        variant="fullWidth"
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: 'parimary.main',
                            }
                        }}
                        sx={{
                            minHeight: '18px'
                        }}
                    >
                        <Tab label="Search Token" {...a11yProps(0)} sx={{
                            minHeight: '18px',
                            color: "primary.main",
                        }} />
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Tab label="Import Orderbook"  {...a11yProps(1)} sx={{
                            minHeight: '18px',
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
                        <SearchToken />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <ImportOrderbook />
                    </TabPanel>
                </SwipeableViews>
            </Box>
        </Paper>
    )
}

export default React.memo(SelectTokenPoper)