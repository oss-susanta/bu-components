import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/name/:id", ({ params }) =>
    HttpResponse.json({ name: `${params.id}`.toUpperCase() }),
  ),
];
