import React, { useMemo } from 'react';
import { HeadManagerContext } from 'next/dist/shared/lib/head-manager-context';
import initHeadManager from 'next/dist/client/head-manager';

type HeadManagerValue = {
  updateHead?: ((state: JSX.Element[]) => void) | undefined;
  mountedInstances?: Set<unknown>;
  updateScripts?: ((state: any) => void) | undefined;
  scripts?: any;
  getIsSsr?: () => boolean;
  appDir?: boolean | undefined;
  nonce?: string | undefined;
};

const HeadManagerProvider: React.FC = ({ children }) => {
  const headManager: HeadManagerValue = useMemo(initHeadManager, []);
  headManager.getIsSsr = () => false;

  return <HeadManagerContext.Provider value={headManager}>{children}</HeadManagerContext.Provider>;
};

export default HeadManagerProvider;
