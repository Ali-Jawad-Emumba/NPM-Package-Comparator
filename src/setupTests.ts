import '@testing-library/jest-dom';
import { beforeAll, vi } from 'vitest';
beforeAll(() => {
    // Mock matchMedia for tests
    global.matchMedia = vi.fn().mockImplementation(() => ({
      matches: false,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    }));
  });
  