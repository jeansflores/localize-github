import React, { useEffect, useState } from 'react';
import { FaSpinner, FaStar } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import avatarGithub from '../../assets/image/avatar.jpg';
import api from '../../services/api';
import Backdrop from '../Backdrop';
import {
  Apresentation,
  Avatar,
  Bio,
  Box,
  CountStar,
  Details,
  Repositories,
  RepositoriesList,
  Repository,
  Statistic,
  StatisticInfo,
  StatisticLabel,
  Statistics,
} from './styles';

// Card de detalhes do usuário
const BoxUser = ({ user, handleClose }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user && user.public_repos > 0) {
      setLoading(true);

      // Busca dos repositórios do usuário
      api
        .get(`/users/${user.login}/repos`)
        .then(response => {
          setRepositories(
            response.data.sort((a, b) => {
              return b.stargazers_count - a.stargazers_count;
            })
          );
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [user]);

  // Verifica se existe um usuário, caso não exista não retorna o componente
  if (!user) {
    return null;
  }

  return (
    <Backdrop>
      <Box>
        <Apresentation>
          <span>
            <a href={user.html_url}>{user.name || user.login}</a>
          </span>
          <small>{`@${user.login}`}</small>
          <MdClose
            onClick={() => {
              setRepositories([]);
              handleClose();
            }}
          />
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

        {user.public_repos > 0 && (
          <Repositories className="repositories" loading={loading}>
            {loading && <FaSpinner color="#222" size={20} />}
            {repositories.length > 0 && (
              <>
                <h4>Repositórios</h4>
                <RepositoriesList>
                  {repositories.map(repo => (
                    <Repository key={repo.id}>
                      <span>
                        <a href={repo.html_url}>{repo.name}</a>
                      </span>
                      <CountStar>
                        <FaStar color="#555" />
                        {repo.stargazers_count}
                      </CountStar>
                    </Repository>
                  ))}
                </RepositoriesList>
              </>
            )}
          </Repositories>
        )}
      </Box>
    </Backdrop>
  );
};

BoxUser.propTypes = {
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    bio: PropTypes.string,
    email: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    html_url: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    public_repos: PropTypes.number,
    stargazers_count: PropTypes.number,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BoxUser;
