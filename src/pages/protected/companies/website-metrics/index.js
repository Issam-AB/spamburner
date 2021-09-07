import React from "react";
import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
    Grid,
    Divider as MuiDivider,
    Typography as MuiTypography,
} from "@material-ui/core";

import { green, red } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import Actions from "./Actions";
import BarChart from "./BarChart";
import Stats from "./Stats";


const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

function Dashborad({ theme }) {
    return (
        <React.Fragment>
            <Helmet title="Website Matrics" />
            <Grid justify="space-between" container spacing={2}>
                <Grid item>
                    <Typography variant="h3" style={{ marginBottom: "10px", fontWeight: "700" }} gutterBottom>
                        Website Matrics
                    </Typography>
                    <Typography variant="subtitle2" style={{ marginTop: "-10px", fontWeight: "600" }}>
                        Welcome back, Client's <span>Fist Name!</span> We've missed you.{" "}
                        <span role="img" aria-label="Waving Hand Sign">
                            👋
                        </span>
                    </Typography>
                </Grid>

                <Grid item>
                    <Actions />
                </Grid>
            </Grid>

            <Divider my={6} />

            <Grid container spacing={6}>

                <Grid item xs={12} lg={5}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>Dashborad</Typography>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Stats
                                title="Visitors"
                                amount="24.532"
                                chip="Today"
                                percentageText="+14%"
                                percentagecolor={green[500]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Stats
                                title="Activity"
                                amount="63.200"
                                chip="Annual"
                                percentageText="-12%"
                                percentagecolor={red[500]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Stats
                                title="Real-Time"
                                amount="1.320"
                                chip="Monthly"
                                percentageText="-18%"
                                percentagecolor={red[500]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Stats
                                title="Bounce"
                                amount="12.364"
                                chip="Yearly"
                                percentageText="+27%"
                                percentagecolor={green[500]}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Stats
                                title="Bounce"
                                amount="12.364"
                                chip="Yearly"
                                percentageText="+27%"
                                percentagecolor={green[500]}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <BarChart />
                </Grid>
            </Grid>

            {/* <Grid container spacing={6}>
                <Grid item xs={12} lg={8}>
                    <WorldMap />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <DoughnutChart />
                </Grid>
            </Grid> */}
            {/* <Grid container spacing={6}>
                <Grid item xs={12} lg={4}>
                    <LanguagesTable />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <TrafficTable />
                </Grid>
            </Grid> */}
        </React.Fragment >
    );
}

export default withTheme(Dashborad);
