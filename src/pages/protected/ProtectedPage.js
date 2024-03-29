import React from "react";
import styled from "styled-components/macro";

import { Alert as MuiAlert } from "@material-ui/lab";
import Default from "../protected/companies/Integrations/marketing-performance";
import { spacing } from "@material-ui/system";

const Alert = styled(MuiAlert)(spacing);

function ProtectedPage() {
  return (
    <React.Fragment>
      <Alert mb={4} severity="info">
        This page is only visible by authenticated users.
      </Alert>

      <Default />
    </React.Fragment>
  );
}

export default ProtectedPage;
