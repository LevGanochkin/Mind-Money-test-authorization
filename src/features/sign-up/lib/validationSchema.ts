import { z } from 'zod';

export const schema = z
  .object({
    email: z.string().email('Wrong type of e-mail'),
    phone: z.string().refine(
      value => {
        const digitsOnly = value.replace(/\s/g, '');
        if (!digitsOnly.startsWith('+')) {
          return false;
        }
        const phoneWithoutPlus = digitsOnly.slice(1);
        const isOnlyDigits = /^\d+$/.test(phoneWithoutPlus);
        const isValidLength = phoneWithoutPlus.length === 11;
        return isOnlyDigits && isValidLength;
      },
      {
        message: 'Enter phone number',
      },
    ),
    refCode: z.string().optional(),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/)
      .regex(/[\d\W]/),
  })
  .superRefine((data, ctx) => {
    if (data.password.includes(data.email)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['password'],
      });
    }
  });
