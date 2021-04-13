import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { dirExists } from "../source";

beforeEach(async () => {
  mock({
    "/test": {
      notes: {},
      file: "test"
    },
    "/no-access": directory({
      mode: 0,
      items: {
        test: {}
      }
    })
  })
});

afterEach(async () => {
  restore();
});

test("basic exists", async () => {
  return dirExists("/test").then((exists) => {
    expect(exists).toBe(true);
  });
});

test("basic not exists", async () => {
  return dirExists("/no-exists").then((exists) => {
    expect(exists).toBe(false);
  });
});

test("file", async () => {
  return dirExists("/test/file").then((exists) => {
    expect(exists).toBe(false);
  });
});

test("file included", async () => {
  return dirExists("/test/file", { includeFiles: true }).then((exists) => {
    expect(exists).toBe(true);
  });
});

test("basic no access", async () => {
  return dirExists("/no-access/test").then((exists) => {
    expect(exists).toBe(undefined);
  });
});
