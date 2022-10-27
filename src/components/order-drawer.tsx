import * as React from "react";
import type { NextPage } from "next";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

type Anchor = "right";

const steps = [
  {
    label: "Ordered",
    description: `주문한 음료`,
  },
  {
    label: "Preparing",
    description: "주문받고 준비중인 음료",
  },
  {
    label: "Finishing",
    description: `다 만들어진 음료 (픽업대에 있음~!)`,
  },
  {
    label: "Served",
    description: `고객이 가져간 음료`,
  },
];

const drawer: NextPage = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const list = (anchor: Anchor) => (
    <Box
      sx={{ maxWidth: 400, mx: 3 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1>Order Status</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
      {/* receipt */}
      <>
        <Grid container spacing={2} columns={16} sx={{ mt: 5 }}>
          <Grid item xs={8}>
            <Typography>Subtotal</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align="right">$456.90</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography>Discount -10%</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align="right">$45.69</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography fontWeight="bold">Total</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography align="right" fontWeight="bold">
              $411.21
            </Typography>
          </Grid>
        </Grid>
      </>
    </Box>
  );

  return (
    <>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={"anchor"}>
          <Button color="inherit" onClick={toggleDrawer(anchor, true)}>
            <RoomServiceIcon></RoomServiceIcon>ORDER STATUS
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default drawer;
