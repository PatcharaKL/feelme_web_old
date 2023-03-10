// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3000/user", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "test user",
      })
    );
  }),
  rest.get("/user/:id", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "test user",
      })
    );
  }),
];
