import { NextPage } from "next";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import OrderDrawer from "@/components/order-drawer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SelectedPage: NextPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <Item>
              <Button color="inherit">
                <ArrowBackIcon></ArrowBackIcon>BACK TO MENU
              </Button>
            </Item>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid xs={3}>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <OrderDrawer></OrderDrawer>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SelectedPage;
