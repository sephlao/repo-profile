// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { mount } from 'enzyme';
import { HomePage } from './HomePage';


describe('Testing HomePage component', () => {
  it('should render search form', () => {
    const props = {
      query: { keyword: '', repo: ''},
      profile: {},
      loading: false,
      actions: {
        loadProfile: () => { return Promise.resolve(); }
      }
    };

    const wrapper = mount(<HomePage {...props} />);
    // const saveButton = wrapper.find('input').last();
    expect(wrapper.find('form').length).toBe(1);
    // expect(wrapper.find('h1').text().toLocaleLowerCase()).toEqual('repo profile');
  });

});