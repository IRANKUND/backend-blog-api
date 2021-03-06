
import joi from '@hapi/joi';

const validateRegistration= data =>{
    const schema= {
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };

    return joi.validate(data, schema);
};

const validateLogin=  data =>{
    const schema= {
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    };

    return joi.validate(data, schema);
};
const validatecomment=  data =>{
    const schema= {
        
       blodId: joi.string().required(),
       name: joi.string().min(6).required(),
       email: joi.string().min(6).required().email(),
       content: joi.string().min(6).required()
    };

    return joi.validate(data, schema);
};

const validateblog=  data =>{
    const schema= {
       
       title: joi.string().min(6).required(),
       content: joi.string().min(6).required() 
    };

    return joi.validate(data, schema);
};

module.exports.validateLogin= validateLogin;
module.exports.validateRegistration= validateRegistration;
module.exports.validatecomment=validatecomment;
module.exports.validateblog=validateblog;

