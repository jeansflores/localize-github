import React, { useState } from 'react';
import { FaAt, FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import logo from '../../assets/image/logo.png';

import {
  SearchBar,
  SearchGroupInput,
  SearchInput,
  SearchButton,
  SearchContainer,
  SearchInfo,
  SearchInfoError,
  Logo,
} from './styles';
import { theme } from '../../utils';
import api from '../../services/api';
import Backdrop from '../../components/Backdrop';
import BoxUser from '../../components/BoxUser';

const Home = () => {
  const [user, setUser] = useState({});
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
      api
        .get(`/users/${username}`)
        .then(response => {
          setUser(response.data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);

          if (error.response.status === 404) {
            formik.setFieldError('username', 'Digite um @username válido!');
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

      {user.login && (
        <Backdrop>
          <BoxUser user={user} />
        </Backdrop>
      )}
    </SearchContainer>
  );
};

export default Home;
