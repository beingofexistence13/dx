import { JsonObject } from '@angular-devkit/core';
import { BuilderContext } from '@angular-devkit/architect';

export declare function getWebpackConfig(
  baseConfig: any,
  options: { builderOptions: JsonObject; builderContext: BuilderContext }
): any;
