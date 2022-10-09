import Joi from 'joi';

// email validator
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// password not contain space
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,30}$/;

const emailSchema = Joi.object({
  email: Joi.string().email().required().regex(new RegExp(emailRegex)),
});
const nameSchema = Joi.object({
  name: Joi.string().required().min(2).max(30),
});

const passwordSchema = Joi.object({
  password: Joi.string().required().regex(new RegExp(passwordRegex)).min(6).max(30),
});

export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const result = emailSchema.validate({ email });
  return !result.error;
}

export function isValidName(name: string): boolean {
  if (!name) return false;
  const result = nameSchema.validate({ name });
  return !result.error;
}

export function isValidPassword(password: string): boolean {
  if (!password) return false;
  const result = passwordSchema.validate({ password });
  return !result.error;
}
