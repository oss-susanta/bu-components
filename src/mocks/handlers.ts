import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://example.com/name/:id", ({ params }) =>
    HttpResponse.json({ name: `${params.id}`.toUpperCase() }),
  ),
];
