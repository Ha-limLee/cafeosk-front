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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SelectMenu: NextPage = () => {
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
              <Item>
                <Grid container spacing={2}>
                  <Grid xs={6}>
                    <Item>
                      <h1>$99</h1>
                    </Item>
                  </Grid>
                  <Grid xs={6}>
                    <Item>수량</Item>
                  </Grid>
                </Grid>
              </Item>
              <Item>
                <Button color="error" variant="contained" size="large">
                  PLACE ORDER
                </Button>
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SelectMenu;
