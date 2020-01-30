import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<App />)
    instance = wrapper.instance()

  })

  it('should check the data default state', () => {
    expect(wrapper.state().type[0].id).toEqual(1);
    expect(wrapper.state().type[0].headline).toEqual('The Who postpones Denver Concert at the Pepsi Center');
    expect(wrapper.state().type[0].description).toEqual('Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.');
  });

  it('should filter news feed by type', () => {
  	const mockEvent = {
        target: {
        	id: "entertainment"
        }
    	}
    expect(wrapper.state().type[0].headline).toEqual('The Who postpones Denver Concert at the Pepsi Center');
    instance.filterNewsType(mockEvent)
    expect(wrapper.state().type[0].headline).toEqual('Spider-Man Will Remain in the Marvel Cinematic Universe');
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});