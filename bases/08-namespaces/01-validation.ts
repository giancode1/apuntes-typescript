//usado para crear frameworks, librerias 
//es como un agrupador
//para el desarrollo casi ni se usa

namespace Validations {
    export const validateText = (text: string):boolean => {
        return (text.length>3) ? true : false;
    }

    export const validateDate = (myDate: Date):boolean => {
        return (isNaN(myDate.valueOf())) ? false : true;
    }
           
}

console.log(Validations.validateText("Hello"));