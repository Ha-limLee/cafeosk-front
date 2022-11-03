import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CafeTabs from "@/components/cafe-tabs";

const Home: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_API_SERVER);
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <Box>
          <CafeTabs />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
