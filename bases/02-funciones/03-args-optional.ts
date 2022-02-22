(() => {
    const fullName = (firstName: string, lastName?: string ): string => {
      return `${firstName} ${lastName || ''}`;
    };
  
    const a = fullName("Giancarlo"); //con el ? null check arriba ya esta linea no da error
    console.log(a);
  })();
  