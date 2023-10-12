import { exec } from 'child_process';
import { join } from 'path';

export interface Package {
  name: string;
  version: string;
  private: boolean;
  location: string;
}

export const listOfPackages = (): Promise<Package[]> =>
  new Promise((res, rej) => {
    const command = `npx lerna list --json`;
    exec(command, { cwd: join(__dirname, '..', '..', 'code') }, (e, result) => {
      if (e) {
        rej(e);
      } else {
        const data = JSON.parse(result.toString().trim());
        res(data);
      }
    });
  });
