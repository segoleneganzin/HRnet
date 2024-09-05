import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach, vi } from 'vitest';

// Clear mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
});

// Clean DOM after each test
afterEach(() => {
  cleanup();
});
