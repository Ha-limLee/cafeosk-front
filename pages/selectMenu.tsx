import * as React from "react";
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import Appbar from "./Appbar";

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
          <Grid xs={3} style={{ verticalAlign: "middle" }}><img src="/images/seleteCoffeeImg.jpg" width={500}></img></Grid>
          <Grid xs={9} >
            <Item>
              <Stack spacing={2}>
                              <Item>
                  <h1>Cinnamon and Cocoa</h1>
                </Item>
                <Item>
                  A single espresso shot poured into hot foamy milk, with the surface topped with
                  midly sweetened cocoa powder and drizzled with scrumptious caramel syrup.
                </Item>
                <Item>SIZE</Item>
                <Item>EXTRA</Item>

                <Item>MILK TYPE</Item>
                <Item>
                  <h1>$99</h1>
                </Item>
                <Item>
                  <Button color="error" variant="contained" size="large">
                    PLACE ORDER
                  </Button>
                </Item>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SelectMenu;
