//enumeraciones
//nos ayuda a trabajar con valores que tengan un orden o sentido para nosotros
(()=>{
    //ejemplos para entender:
    let audio = 1 //10 mas alto y 1 mas bajo
    //Audiolevel = 10 30 50; algo asi

    //esto se logra con enums: 
    
    // enum AudioLevel {
    //     min,
    //     medium,
    //     max
    // }
    enum AudioLevel {
        min = 1,
        medium = 5, //sino le pusiera 5 , seria 2
        max = 10
    }

    // en el . te ayuda con las opciones del enum
    let currentAudioLevel:AudioLevel = AudioLevel.medium; //currentAudioLevel es de tipo AudioLevel, y AudioLevel es un enum

    console.log(currentAudioLevel)


    //mas ejemplos:
    enum PictureOrientation {
        Landscape = 10, // 10
        Portrait, // 11
        Square, // 12
        Panorama // 13
    }
    console.log('portrait', PictureOrientation.Portrait);
    
    enum Country {
        Bolivia = 'bol',
        Colombia = 'col',
        Mexico = 'mex',
        EEUU = 'usa',
        Espana = 'esp'
    }
    
    const country: Country = Country.Colombia;
    console.log('country', country);

})()