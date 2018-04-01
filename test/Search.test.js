import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

import { Search } from '../src/features/search/Search';

Enzyme.configure({ adapter: new Adapter() });

describe("<Search />", () => {
  it("Should rendered component", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(".section")).to.have.length(1);
  });
});
