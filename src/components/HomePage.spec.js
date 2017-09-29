// Must have at least one test file in this directory or Mocha will throw an error.
import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

function setup() {
  return shallow(<HomePage />);
}

describe('Testing HomePage component', () => {
  it('renders form and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('h1').text().toLocaleLowerCase()).toEqual('repo profile');
  });

});