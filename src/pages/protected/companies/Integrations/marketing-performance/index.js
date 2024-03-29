import React from "react";

import styled, { withTheme } from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { green, red } from "@material-ui/core/colors";
import Actions from "./Actions";
import BarChart from "./BarChart";
import Intelegence from "./Intelegence";
import Stats from "./Stats";
import Account from "./Account";

const Divider = styled(MuiDivider)(spacing);
const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const Overview = () => {
  return (
    <React.Fragment>
      <Helmet title="Marketing Performance" />
      <Grid container justify="space-between" spacing={4}>
        <Grid item>
          <Typography
            variant="h3"
            style={{ marginBottom: "10px", fontWeight: "700" }}
            gutterBottom
          >
            Marketing Performance
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ marginTop: "-10px", fontWeight: "600" }}
          >
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

      <Divider my={3} />

      <Grid container spacing={6} style={{ marginTop: "10px" }}>
        <Grid item lg={3}>
          <Grid item xs={12} lg={4} xl>
            <Intelegence title="INTELLIGENCE DASHBOARD" />
          </Grid>
          <Grid item xs={12} lg={4} xl>
            <Account
              title="Account Manager"
              name="Michael Field"
              call="(863)999-0010"
              email="Manager@backend.com"
              avatar="/static/img/avatars/avatar-"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} lg={9}>
          <BarChart />
        </Grid>
      </Grid>
      <Spacer mb={6} />

      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="People"
            amount="17,244"
            chip="Today"
            percentageText="+26%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Total Leads"
            amount="603"
            chip="Today"
            percentageText="-14%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Conversion Rate"
            amount="3.49%"
            chip="Today"
            percentageText="+18%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Cost Per Lead"
            amount="$112.9"
            chip="Yearly"
            percentageText="-9%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Cost"
            amount="$74,772"
            chip="Yearly"
            percentageText="-9%"
            percentagecolor={red[500]}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withTheme(Overview);
