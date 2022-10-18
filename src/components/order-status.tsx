import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CafeTabs from '@/components/cafe-tabs';

const orderStatus: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh'
        }}
      >
        <Box>
          <CafeTabs />
        </Box>
      </Box>
      </Container>
  );
};

export default orderStatus;