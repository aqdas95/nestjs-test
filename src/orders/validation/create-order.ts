import * as Joi from 'joi';

export const createCatSchema = Joi.object({
  coin: Joi.string().required().valid('ETH', 'ADA', 'XLM'),
  amount: Joi.number().required().greater(0),
  extra1: Joi.string().optional(),
  extra2: Joi.when('extra1', {
    is: undefined,
    then: Joi.string().required(),
    otherwise: Joi.string().optional(),
  }),
}).allow({ unknown: false });
