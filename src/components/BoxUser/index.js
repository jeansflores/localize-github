import React from 'react';
import { MdClose } from 'react-icons/md';
import avatarGithub from '../../assets/image/avatar.jpg';

import {
  Box,
  Apresentation,
  Avatar,
  Bio,
  Statistics,
  Statistic,
  StatisticInfo,
  StatisticLabel,
  Details,
  Repositories,
} from './styles';
import Backdrop from '../Backdrop';

const BoxUser = ({ user, handleClose }) => {
  if (!user) return null;

  return (
    <Backdrop>
      <Box>
        <Apresentation>
          <span>
            <a href={user.html_url}>{user.name || user.login}</a>
          </span>
          <small>{`@${user.login}`}</small>
          <MdClose onClick={handleClose} />
        </Apresentation>

        <Avatar>
          <img src={user.avatar_url || avatarGithub} alt="Avatar" />
        </Avatar>

        {user.email && (
          <Details>
            <p>{user.email}</p>
          </Details>
        )}

        {user.bio && (
          <Bio>
            <p>{user.bio}</p>
          </Bio>
        )}

        <Statistics>
          <Statistic>
            <StatisticInfo>{user.followers}</StatisticInfo>
            <StatisticLabel>Seguidores</StatisticLabel>
          </Statistic>
          <Statistic>
            <StatisticInfo>{user.following}</StatisticInfo>
            <StatisticLabel>Seguindo</StatisticLabel>
          </Statistic>
          <Statistic>
            <StatisticInfo>{user.public_repos}</StatisticInfo>
            <StatisticLabel>Repositórios</StatisticLabel>
          </Statistic>
        </Statistics>
      </Box>
    </Backdrop>
  );
};

export default BoxUser;
