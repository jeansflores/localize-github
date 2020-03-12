import React from 'react';
import { shallow } from '../../config/enzyme';

import BoxUser from '../BoxUser';

describe('Show User', () => {
  it('should render card details without list repositories', () => {
    const user = {
      avatar_url: null,
      bio: 'bio',
      email: 'user@email.com',
      followers: 1,
      following: 1,
      html_url: '',
      login: 'user',
      name: 'User',
      public_repos: 0,
      stargazers_count: 1,
    };

    const wrapper = shallow(<BoxUser user={user} handleClose={() => {}} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.hasClass('repositories')).toBeFalsy();
  });
  it('should render card details with list repositories', () => {
    const user = {
      avatar_url: null,
      bio: 'bio',
      email: 'user@email.com',
      followers: 1,
      following: 1,
      html_url: '',
      login: 'user',
      name: 'User',
      public_repos: 1,
      stargazers_count: 1,
    };

    const wrapper = shallow(<BoxUser user={user} handleClose={() => {}} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('.repositories')).toBeTruthy();
  });
});
