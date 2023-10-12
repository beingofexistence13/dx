import { LoggerApi } from '@angular-devkit/core/src/logger';
import { take } from 'rxjs/operators';

const { runCompodoc } = require('./run-compodoc');

const mockRunScript = jest.fn();

jest.mock('@storybook/cli', () => ({
  JsPackageManagerFactory: {
    getPackageManager: () => ({
      runPackageCommandSync: mockRunScript,
    }),
  },
}));

const builderContextLoggerMock: LoggerApi = {
  createChild: jest.fn(),
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
  fatal: jest.fn(),
};

describe('runCompodoc', () => {
  afterEach(() => {
    mockRunScript.mockClear();
  });

  it('should run compodoc with tsconfig from context', async () => {
    runCompodoc(
      {
        compodocArgs: [],
        tsconfig: 'path/to/tsconfig.json',
      },
      {
        workspaceRoot: 'path/to/project',
        logger: builderContextLoggerMock,
      }
    )
      .pipe(take(1))
      .subscribe();

    expect(mockRunScript).toHaveBeenCalledWith(
      'compodoc',
      ['-p', 'path/to/tsconfig.json', '-d', 'path/to/project'],
      'path/to/project',
      'inherit'
    );
  });

  it('should run compodoc with tsconfig from compodocArgs', async () => {
    runCompodoc(
      {
        compodocArgs: ['-p', 'path/to/tsconfig.stories.json'],
        tsconfig: 'path/to/tsconfig.json',
      },
      {
        workspaceRoot: 'path/to/project',
        logger: builderContextLoggerMock,
      }
    )
      .pipe(take(1))
      .subscribe();

    expect(mockRunScript).toHaveBeenCalledWith(
      'compodoc',
      ['-d', 'path/to/project', '-p', 'path/to/tsconfig.stories.json'],
      'path/to/project',
      'inherit'
    );
  });

  it('should run compodoc with default output folder.', async () => {
    runCompodoc(
      {
        compodocArgs: [],
        tsconfig: 'path/to/tsconfig.json',
      },
      {
        workspaceRoot: 'path/to/project',
        logger: builderContextLoggerMock,
      }
    )
      .pipe(take(1))
      .subscribe();

    expect(mockRunScript).toHaveBeenCalledWith(
      'compodoc',
      ['-p', 'path/to/tsconfig.json', '-d', 'path/to/project'],
      'path/to/project',
      'inherit'
    );
  });

  it('should run with custom output folder specified with --output compodocArgs', async () => {
    runCompodoc(
      {
        compodocArgs: ['--output', 'path/to/customFolder'],
        tsconfig: 'path/to/tsconfig.json',
      },
      {
        workspaceRoot: 'path/to/project',
        logger: builderContextLoggerMock,
      }
    )
      .pipe(take(1))
      .subscribe();

    expect(mockRunScript).toHaveBeenCalledWith(
      'compodoc',
      ['-p', 'path/to/tsconfig.json', '--output', 'path/to/customFolder'],
      'path/to/project',
      'inherit'
    );
  });

  it('should run with custom output folder specified with -d compodocArgs', async () => {
    runCompodoc(
      {
        compodocArgs: ['-d', 'path/to/customFolder'],
        tsconfig: 'path/to/tsconfig.json',
      },
      {
        workspaceRoot: 'path/to/project',
        logger: builderContextLoggerMock,
      }
    )
      .pipe(take(1))
      .subscribe();

    expect(mockRunScript).toHaveBeenCalledWith(
      'compodoc',
      ['-p', 'path/to/tsconfig.json', '-d', 'path/to/customFolder'],
      'path/to/project',
      'inherit'
    );
  });
});
