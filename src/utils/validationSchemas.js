import { z } from "zod/mini";

export const emailSchema = z.pipe(
  z
    .string()
    .check(
      z.trim(),
      z.minLength(1, { error: "Whoops, the email can’t be empty" }),
    ),
  z.email({ error: "Whoops, make sure it’s an email" }),
);

export const validate = (schema, value) => {
  const result = schema.safeParse(value);
  return result.success ? "" : result.error.issues[0].message;
};
