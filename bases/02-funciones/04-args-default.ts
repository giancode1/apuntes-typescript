(() => {
  //los argumentos opcionales se definen con un signo de interrogacion
  //y van al final de la lista de argumentos
    const fullName = (firstName: string,  lastName?: string, upper:boolean=false): string => {
      if(upper){
        return `${firstName} ${lastName || ''}`.toUpperCase();
      }else{
        return `${firstName} ${lastName || ''}`;
      }
    };
  
    const a = fullName("Giancarlo",'Culcay',true); 
    console.log(a);
  })();
  