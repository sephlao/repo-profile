import React from 'react';
import { mount } from 'enzyme';
import { TrendingPage } from './TrendingPage';

describe('Testing TrendingPage component', () => {
  it('should render search form', () => {
    const props = {
      query: { keyword: '', repo: '' },
      trending: {},
      loading: false,
      actions: {
        loadTrending: () => { return Promise.resolve(); }
      }
    };

    const wrapper = mount(<TrendingPage {...props} />);
    expect(wrapper.find('form').length).toBe(1);
  });
});
