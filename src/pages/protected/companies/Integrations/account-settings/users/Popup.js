import React from "react";
import styled from "styled-components/macro";
import * as Yup from "yup";
import { Formik } from "formik";
import { Close as CloseIcon } from "@material-ui/icons";
import {
  Grid,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider as MuiDivider,
  TextField,
  Card,
  Box,
  CircularProgress,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";
const Alert = styled(MuiAlert)(spacing);

const Divider = styled(MuiDivider)(spacing);

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#6320EE",
    marginRight: "10px",
    marginLeft: "5px",
  },
  // paper: {
  //     borderRadius: "12px",
  //     boxShadow: "0px 0px 12px -5px #000000",
  // },
  dialogwrapper: {
    position: "absolute",
    maxWidth: "40rem",
    // top: theme.spacing(5)
  },
  dialogTitle: {
    paddingRight: "0px",
    float: "right",
  },
  startICon: {
    margin: 0,
  },
  chips: {
    height: "20px",
    borderRadius: "0px",
  },
  label: {
    paddingLeft: "1px",
    paddingRight: "1px",
  },
  rootButton: {
    minWidth: "39px",
    marginTop: "-2px",
    marginRight: "11px",
  },
  ButtonAprove: {
    backgroundColor: "#23CC94",
    color: "white",
    width: "6rem",
    margin: "12px 39px",
  },
  discription: {
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "22px",
    marginTop: "10px",
  },
  input: {
    padding: "11.5px 14px",
    backgroundColor: "#F9F9FC",
  },
  h5: {
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "5px",
  },
  select: {
    border: "1px solid #bfbfbf",
    borderRadius: "4px",
    padding: "4px 12px ",
    // backgroundColor: "white"
  },
  shrink: {
    display: "none",
  },
}));

const Popup = ({ open, setOpen, handleClose, icons, name, discription }) => {
  const classes = useStyles();

  const timeOut = (time) => new Promise((res) => setTimeout(res, time));
  const initialValues = {
    firstName: "Lucy",
    lastName: "Lavender",
    email: "lucylavender@gmail.com",
    password: "mypassword123",
    confirmPassword: "mypassword123",
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string()
      .min(12, "Must be at least 12 characters")
      .max(255)
      .required("Required"),
    confirmPassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  const handleSubmit = async (
    values,
    { resetForm, setErrors, setStatus, setSubmitting }
  ) => {
    try {
      await timeOut(1500);
      resetForm();
      setStatus({ sent: true });
      setSubmitting(false);
    } catch (error) {
      setStatus({ sent: false });
      setErrors({ submit: error.message });
      setSubmitting(false);
    }
  };

  return (
    <Dialog
      classes={{ paper: classes.dialogwrapper }}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Add
              style={{ width: "22px", color: "#6320EE", marginLeft: "10px" }}
            />
            <Typography
              variant="h4"
              style={{ fontSize: "16px", fontWeight: "700" }}
            >
              {" "}
              Invite New User
            </Typography>
          </div>
          <Button
            style={{ color: "#868695" }}
            classes={{ root: classes.rootButton }}
            onClick={() => {
              setOpen(false);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>

      <DialogContent style={{ marginTop: "-18px" }}>
        <Divider my={2} />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
            status,
          }) => (
            <Card mb={6}>
              <CardContent>
                {status && status.sent && (
                  <Alert severity="success" my={3}>
                    [DEMO] Your data has been submitted successfully!
                  </Alert>
                )}

                {isSubmitting ? (
                  <Box display="flex" justifyContent="center" my={6}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={6}>
                      <Grid item md={12} style={{ padding: "9px" }}>
                        <Typography variant="h5" classes={{ h5: classes.h5 }}>
                          Email*:
                        </Typography>
                        <TextField
                          InputProps={{ classes: { input: classes.input } }}
                          InputLabelProps={{ shrink: false }}
                          name="email"
                          placeholder="Email"
                          value={values.email}
                          error={Boolean(touched.email && errors.email)}
                          fullWidth
                          helperText={touched.email && errors.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          variant="outlined"
                          my={2}
                        />
                      </Grid>
                      <Grid item md={12} style={{ padding: "9px" }}>
                        <Typography variant="h5" classes={{ h5: classes.h5 }}>
                          Access Level*:
                        </Typography>
                        <FormControl fullWidth>
                          <InputLabel
                            // shrink={false}
                            classes={{ shrink: classes.shrink }}
                            style={{ margin: "-7px 10px", zIndex: 1 }}
                            id="demo-simple-select-label"
                          >
                            Access Level
                          </InputLabel>
                          <Select
                            classes={{ root: classes.input }}
                            InputLabelProps={{ shrink: false }}
                            variant="outlined"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value={10}>View Only Access</MenuItem>
                            <MenuItem value={20}>Full Access</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item md={12} style={{ padding: "9px" }}>
                        <Typography variant="h5" classes={{ h5: classes.h5 }}>
                          Role (optional)
                        </Typography>
                        <Typography
                          variant="h5"
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            marginBottom: "8px",
                          }}
                        >
                          "What role does this person play with your
                          organization?"
                        </Typography>
                        <TextField
                          InputLabelProps={{ shrink: false }}
                          placeholder="Last Name"
                          InputProps={{ classes: { input: classes.input } }}
                          name="lastName"
                          // label="Last Name"
                          value={values.lastName}
                          error={Boolean(touched.lastName && errors.lastName)}
                          fullWidth
                          helperText={touched.lastName && errors.lastName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          variant="outlined"
                          my={2}
                        />
                      </Grid>
                    </Grid>

                    <div style={{ float: "left", margin: "20px 0" }}>
                      <Button
                        style={{ marginRight: "15px" }}
                        // type="outlined"
                        variant="outlined"
                        color="primary"
                        mt={3}
                      >
                        Cancel
                      </Button>
                      <Button
                        style={{ width: "10rem", backgroundColor: "#6A74C9" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        mt={3}
                      >
                        Send Invite
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
