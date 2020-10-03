import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { dirExists, dirExistsSync } from "../source";

beforeEach(async () => {
  mock({
    "/test": {
      notes: {}
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

test("basic no access", async () => {
  return dirExists("/no-access/test").then((exists) => {
    expect(exists).toBe(undefined);
  });
});

test("basic sync exists", () => {
  expect(dirExistsSync("/test")).toBe(true);
});

test("basic sync not exists", () => {
  expect(dirExistsSync("/no-exists")).toBe(false);
});

test("basic sync not exists", () => {
  expect(dirExistsSync("/no-access/test")).toBe(undefined);
});
