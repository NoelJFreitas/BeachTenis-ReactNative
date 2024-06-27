import {z} from 'zod';

export const newGameSchema = z.object({
  gameName: z.string().min(4, 'Nome muito curto'),
  shortDescription: z
    .string()
    .min(4, 'Descrição muito curta')
    .max(40, 'Descrição muito extensa'),
  description: z.string().email('Descrição inválida'),
  vacancies: z.coerce.number().min(1, 'Vaga menor que 1'),
  local: z.string().min(1, 'Local invalido'),
  date: z.coerce.number(),
});

export type NewGameSchema = z.infer<typeof newGameSchema>;
