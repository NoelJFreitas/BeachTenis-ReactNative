import {z} from 'zod';

export const registerSchema = z.object({
  firstName: z.string().min(4, 'Nome inválido'),
  lastName: z.string().min(4, 'Nome inválido'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'Senha obrigatória'),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
