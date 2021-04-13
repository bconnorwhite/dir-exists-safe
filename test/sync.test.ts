import { test, expect } from "@jest/globals";
import mock, { restore, directory } from "mock-fs";
import { dirExistsSync } from "../source";

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
  });
});

afterEach(async () => {
  restore();
});

test("basic sync exists", () => {
  expect(dirExistsSync("/test")).toBe(true);
});

test("basic sync not exists", () => {
  expect(dirExistsSync("/no-exists")).toBe(false);
});

test("file", () => {
  expect(dirExistsSync("/test/file")).toBe(false);
});

test("file included", async () => {
  expect(dirExistsSync("/test/file", { includeFiles: true })).toBe(true);
});

test("basic sync no access", () => {
  expect(dirExistsSync("/no-access/test")).toBe(undefined);
});
