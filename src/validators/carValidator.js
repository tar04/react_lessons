import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[{a-zA-ZА-яЁёЫыІіЇї]{1,20}$')).required().messages({
        'string.empty':'Введіть модель авто',
        'string.pattern.base':'Модель від 1 до 20 символів без цифр'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base':'Припустима ціна від 0 до 1 000 000',
        'number.min':'Мінімальна ціна - 0',
        'number.max':'Ціна не більше 1 000 000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік може бути від 1990 до поточного'
    })
})