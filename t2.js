import { cleanup } from '@testing-library/react';
import utils from '@testing-library/react';

afterEach(() => utils.cleanup());
afterEach(utils.cleanup);
