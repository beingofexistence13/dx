import { nanoid } from 'nanoid';
import { cache } from '@storybook/core-common';
import { resetSessionIdForTest, getSessionId, SESSION_TIMEOUT } from './session-id';

jest.mock('@storybook/core-common', () => {
  const actual = jest.requireActual('@storybook/core-common');
  return {
    ...actual,
    cache: {
      get: jest.fn(),
      set: jest.fn(),
    },
  };
});
jest.mock('nanoid');

const spy = (x: any) => x as jest.SpyInstance;

describe('getSessionId', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    resetSessionIdForTest();
  });

  test('returns existing sessionId when cached in memory and does not fetch from disk', async () => {
    const existingSessionId = 'memory-session-id';
    resetSessionIdForTest(existingSessionId);

    const sessionId = await getSessionId();

    expect(cache.get).not.toHaveBeenCalled();
    expect(cache.set).toHaveBeenCalledTimes(1);
    expect(cache.set).toHaveBeenCalledWith(
      'session',
      expect.objectContaining({ id: existingSessionId })
    );
    expect(sessionId).toBe(existingSessionId);
  });

  test('returns existing sessionId when cached on disk and not expired', async () => {
    const existingSessionId = 'existing-session-id';
    const existingSession = {
      id: existingSessionId,
      lastUsed: Date.now() - SESSION_TIMEOUT + 1000,
    };

    spy(cache.get).mockResolvedValueOnce(existingSession);

    const sessionId = await getSessionId();

    expect(cache.get).toHaveBeenCalledTimes(1);
    expect(cache.get).toHaveBeenCalledWith('session');
    expect(cache.set).toHaveBeenCalledTimes(1);
    expect(cache.set).toHaveBeenCalledWith(
      'session',
      expect.objectContaining({ id: existingSessionId })
    );
    expect(sessionId).toBe(existingSessionId);
  });

  test('generates new sessionId when none exists', async () => {
    const newSessionId = 'new-session-id';
    (nanoid as any as jest.SpyInstance).mockReturnValueOnce(newSessionId);

    spy(cache.get).mockResolvedValueOnce(undefined);

    const sessionId = await getSessionId();

    expect(cache.get).toHaveBeenCalledTimes(1);
    expect(cache.get).toHaveBeenCalledWith('session');
    expect(nanoid).toHaveBeenCalledTimes(1);
    expect(cache.set).toHaveBeenCalledTimes(1);
    expect(cache.set).toHaveBeenCalledWith(
      'session',
      expect.objectContaining({ id: newSessionId })
    );
    expect(sessionId).toBe(newSessionId);
  });

  test('generates new sessionId when existing one is expired', async () => {
    const expiredSessionId = 'expired-session-id';
    const expiredSession = { id: expiredSessionId, lastUsed: Date.now() - SESSION_TIMEOUT - 1000 };
    const newSessionId = 'new-session-id';
    spy(nanoid).mockReturnValueOnce(newSessionId);

    spy(cache.get).mockResolvedValueOnce(expiredSession);

    const sessionId = await getSessionId();

    expect(cache.get).toHaveBeenCalledTimes(1);
    expect(cache.get).toHaveBeenCalledWith('session');
    expect(nanoid).toHaveBeenCalledTimes(1);
    expect(cache.set).toHaveBeenCalledTimes(1);
    expect(cache.set).toHaveBeenCalledWith(
      'session',
      expect.objectContaining({ id: newSessionId })
    );
    expect(sessionId).toBe(newSessionId);
  });
});
