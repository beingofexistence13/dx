import fse from 'fs-extra';

export async function readTemplate(filename: string) {
  return fse.readFile(filename, {
    encoding: 'utf8',
  });
}
