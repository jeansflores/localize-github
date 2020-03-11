import React from 'react';

import {
  Box,
  BoxHeader,
  Apresentation,
  Avatar,
  Bio,
  Statistics,
} from './styles';

const BoxUser = ({ user }) => (
  <Box>
    <BoxHeader>
      <Apresentation />
      <Avatar />
      <Bio />
      <Statistics />
    </BoxHeader>
  </Box>
);

export default BoxUser;
