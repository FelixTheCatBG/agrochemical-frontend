// app/src/components/__tests__/Login-test.js
import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginPage from "../LoginPage";

configure({ adapter: new Adapter() });

describe('Login Component', () => {
    // it('should render without throwing an error', () => {
    //     expect(shallow(<LoginPage />).exists(<form></form>)).toBe(true);
    // });

    it('renders a email input', () => {
        expect(shallow(<LoginPage />).find('#email').length).toEqual(1);
    });

    it('renders a password input', () => {
        expect(shallow(<LoginPage />).find('#password').length).toEqual(1);
    });

    describe('Email input', () => {

        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(<LoginPage />);

            wrapper.find('#email').simulate('change', { target: { name: 'email', value: 'blah@gmail.com' } });
            expect(wrapper.state('email')).toEqual('blah@gmail.com');
        });
    });

    describe('Password input', () => {

        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(<LoginPage />);

            wrapper.find('#password').simulate('change', { target: { name: 'password', value: 'cats' } });
            expect(wrapper.state('password')).toEqual('cats');
        });
    });

    it('renders correctly', () => {
        const tree = render(<LoginPage />);

        expect(tree).toMatchSnapshot();
    });
});