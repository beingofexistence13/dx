// @ts-expect-error (loader-utils has no webpack5 compatible types)
import { interpolateName } from 'loader-utils';
import imageSizeOf from 'image-size';
import type { RawLoaderDefinition } from 'webpack';
import type { NextConfig } from 'next';

interface LoaderOptions {
  filename: string;
  nextConfig: NextConfig;
}

const nextImageLoaderStub: RawLoaderDefinition<LoaderOptions> = function (content) {
  const { filename, nextConfig } = this.getOptions();
  const outputPath = interpolateName(this, filename.replace('[ext]', '.[ext]'), {
    context: this.rootContext,
    content,
  });

  this.emitFile(outputPath, content);

  const { width, height } = imageSizeOf(this.resourcePath);

  if (nextConfig.images?.disableStaticImages) {
    return `const src = '${outputPath}'; export default src;`;
  }

  return `export default ${JSON.stringify({
    src: outputPath,
    height,
    width,
    blurDataURL: outputPath,
  })};`;
};

nextImageLoaderStub.raw = true;

export = nextImageLoaderStub;
