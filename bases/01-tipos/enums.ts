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



})()