import { beforeAll, afterAll, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { server } from "./mocks/node";

beforeAll(() =>
  server.listen({
    onUnhandledRequest: "warn",
  }),
);
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
