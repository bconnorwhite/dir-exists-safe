import { promises, statSync, Stats } from "fs";

export type Options = {
  /**
   * Return true if path is file. Default: `false`
   */
  includeFiles?: boolean;
};

type Error = {
  code: string;
};

function handleError(e: Error) {
  if(e.code === "ENOENT") {
    return false;
  } else {
    return undefined;
  }
}

function handleResult(result: Stats, options?: Options) {
  return result.isDirectory() || Boolean(options?.includeFiles && result.isFile());
}

export async function dirExists(path: string, options?: Options) {
  return promises.stat(path).then((result) => {
    return handleResult(result, options);
  }).catch((e) => {
    return handleError(e);
  });
}

export function dirExistsSync(path: string, options?: Options) {
  try {
    const result = statSync(path);
    return handleResult(result, options);
  } catch(e) {
    return handleError(e);
  }
}
