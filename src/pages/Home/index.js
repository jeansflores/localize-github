import { useFormik } from 'formik';
import React, { useState } from 'react';
import { FaAt, FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';

import logo from '../../assets/image/logo.png';
import BoxUser from '../../components/BoxUser';
import api from '../../services/api';
import { theme } from '../../utils';
import {
  Logo,
  SearchBar,
  SearchButton,
  SearchContainer,
  SearchGroupInput,
  SearchInfo,
  SearchInfoError,
  SearchInput,
} from './styles';

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: Yup.object({
      username: Yup.string().required('Por favor digite um @username!'),
    }),
    onSubmit: ({ username }) => {
      setLoading(true);

      // Busca do usuário inserida no form
      api
        .get(`/users/${username}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);

          if (error.response.status === 404) {
            formik.setFieldError(
              'username',
              'Usuário não encontrado, tente outro!'
            );
            formik.setFieldTouched('username', true);
          }
        });
    },
  });

  return (
    <SearchContainer>
      <Logo src={logo} alt="Localize Github" />
      <SearchInfo>
        <span>Encontre qualquer usuário do Github,</span>
        <span>com apenas um CLICK!</span>
      </SearchInfo>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <SearchBar error={formik.errors.username && formik.touched.username}>
          <SearchGroupInput>
            <FaAt color={theme.colors.light} />
            <SearchInput
              id="username"
              name="username"
              type="text"
              placeholder="Insira o username"
              onChange={e => {
                formik.setFieldTouched('username', false);
                formik.setFieldValue('username', e.currentTarget.value);
              }}
              value={formik.values.username}
            />
          </SearchGroupInput>
          <SearchButton loading={loading}>
            {loading ? <FaSpinner color="#222" size={14} /> : 'Buscar'}
          </SearchButton>
        </SearchBar>
        {formik.errors.username && formik.touched.username ? (
          <SearchInfoError>{formik.errors.username}</SearchInfoError>
        ) : null}
      </form>

      <BoxUser
        user={user}
        handleClose={() => {
          formik.resetForm();
          setUser(null);
        }}
      />
    </SearchContainer>
  );
};

export default Home;
