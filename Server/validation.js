import Joi from '@hapi/joi'

//Register VALIDATION
export const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        tagname: Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}

//Login VALIDATION
export const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
}
 


