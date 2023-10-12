import { info, warn } from 'npmlog';
import { logger } from '.';

globalThis.console = { log: jest.fn() } as any;

jest.mock('npmlog', () => ({
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  levels: {
    silly: -Infinity,
    verbose: 1000,
    info: 2000,
    timing: 2500,
    http: 3000,
    notice: 3500,
    warn: 4000,
    error: 5000,
    silent: Infinity,
  },
  level: 'info',
}));

//

describe('node-logger', () => {
  it('should have an info method', () => {
    const message = 'information';
    logger.info(message);
    expect(info).toHaveBeenCalledWith('', message);
  });
  it('should have a warn method', () => {
    const message = 'warning message';
    logger.warn(message);
    expect(warn).toHaveBeenCalledWith('', message);
  });
  it('should have an error method', () => {
    const message = 'error message';
    logger.error(message);
    expect(globalThis.console.log).toHaveBeenCalledWith(expect.stringMatching('message'));
  });
  it('should format errors', () => {
    const message = new Error('A complete disaster');
    logger.error(message);
    expect(globalThis.console.log).toHaveBeenCalledWith(
      expect.stringMatching('A complete disaster')
    );
  });
});
