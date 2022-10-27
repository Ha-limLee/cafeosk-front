import * as React from "react";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Appbar from "./Appbar";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SelectMenu: NextPage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 50;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Appbar></Appbar>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3} style={{ verticalAlign: "middle", height: "300px" }}>
            <img
              src="/images/seleteCoffeeImg.jpg"
              height={400}
              style={{ objectPosition: "-300px 0" }}
            ></img>{" "}
          </Grid>
          <Grid xs={9}>
            <Stack spacing={2}>
              <h1>Cinnamon and Cocoa</h1>
              <Typography>
                A single espresso shot poured into hot foamy milk, with the surface topped with
                midly sweetened cocoa powder and drizzled with scrumptious caramel syrup.
              </Typography>
              <Typography>SIZE</Typography>
              <Typography>EXTRA</Typography>
              <Typography>MILK TYPE</Typography>
              
                <Grid container spacing={2}>
                  <Grid xs={6}>
                      <h1>$99</h1>
                </Grid>
                {/* 수량 */}
                  <Grid xs={6}>
                      <Box sx={{ maxWidth: 400, flexGrow: 1, border:2, borderRadius: 1 }}>
                        <MobileStepper
                          variant="text"
                          steps={maxSteps}
                          position="static"
                          activeStep={activeStep}
                          nextButton={
                            <Button
                              size="small"
                              onClick={handleNext}
                              disabled={activeStep === maxSteps - 1}
                            >
                              <AddIcon></AddIcon>
                            </Button>
                          }
                          backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                              <RemoveIcon></RemoveIcon>
                            </Button>
                          }
                        />
                      </Box>
                  </Grid>
                </Grid>
              
                <Button color="error" variant="contained" size="large">
                  PLACE ORDER
                </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SelectMenu;
