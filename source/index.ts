import { promises, statSync } from "fs";

function handleError(e: any) {
  if(e.code === "ENOENT") {
    return false;
  } else {
    return undefined;
  }
}

export async function dirExists(path: string) {
  return promises.stat(path).then((result) => {
    return result.isDirectory();
  }).catch((e) => {
    return handleError(e);
  });
}

export function dirExistsSync(path: string) {
  try {
    return statSync(path).isDirectory();
  } catch(e) {
    return handleError(e);
  }
}
