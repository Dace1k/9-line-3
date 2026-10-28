import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import '@testing-library/jest-dom';
import '@testing-library/dom';
import '@testing-library/jest-dom/vitest';

expect.extend(matchers);