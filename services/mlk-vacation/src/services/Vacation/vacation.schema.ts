import Joi from "joi";
import { join } from "bluebird";

export const vacationSchema = Joi.object().keys({
  dates: Joi.array().required(),
  userId: Joi.number().required(),
  typeId: Joi.number().required(),
});

export const workflowSchema = Joi.object().keys({
  vacationIds: Joi.array().required(),
  actualStateId: Joi.number().required(),
  userId: Joi.number().required(),
  comment: Joi.string().optional()
});

export const workflowCancelSchema = Joi.object().keys({
  vacationIds: Joi.array().required(),
  comment: Joi.string().optional(),
  userId: Joi.number().required()
});