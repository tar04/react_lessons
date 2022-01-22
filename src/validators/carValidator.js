import Joi from "joi";

export const carValidator = Joi.object({
    id:Joi.number().min(0).messages({
        'number.base':'Enter id correctly'
    }),
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яЁёІіЇїЫы]{1,20}$')).required().messages({
        'string.empty':'Model cannot be empty',
        'string.pattern.base':'Use only letters in range 1 to 20'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base':'Enter price in range 0-1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base':'Year can be in range 1990 to current'
    })
})