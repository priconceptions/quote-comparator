import Adapter from 'enzyme-adapter-react-16';
import fetch from 'node-fetch';

// Configure Enzyme with React 16 adapter
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

global.fetch = fetch;
