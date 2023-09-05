export default function uiHandler(language, darkMode){
    var classType = ''

    if (language === 'english' && darkMode === false)
        {classType = 'en-li'}
    else if (language === 'english' && darkMode === true)
        {classType = 'en-da'}
    else if (language === 'persian' && darkMode === false)
        {classType = 'pe-li'}
    else if (language === 'persian' && darkMode === true)
        {classType = 'pe-da'}

        
    switch(classType){
        case 'en-li' :
            document.getElementById('body').className = 'body'
            document.getElementById('intrduse-container').className = 'intrduse-container'
            document.getElementById('aboutApp').className = 'aboutApp'
            document.getElementById('aboutMe').className = 'aboutMe'
            document.getElementById('navbar').className = 'navbar'
            document.getElementById('workSamples-container').className = 'workSamples-container'
            document.getElementById('prevSampleBtn').className = 'prevSampleBtn'
            document.getElementById('nextSampleBtn').className = 'nextSampleBtn'
            document.getElementById('setting-container').className = 'setting-container'

        break
        case 'en-da' :
            document.getElementById('body').className = 'body body-dark'
            document.getElementById('intrduse-container').className = 'intrduse-container intrduse-container-dark'
            document.getElementById('aboutApp').className = 'aboutApp aboutApp-dark'
            document.getElementById('aboutMe').className = 'aboutMe aboutMe-dark'
            document.getElementById('navbar').className = 'navbar navbar-dark'
            document.getElementById('workSamples-container').className = 'workSamples-container workSamples-container-dark'
            document.getElementById('prevSampleBtn').className = 'prevSampleBtn prevSampleBtn-dark'
            document.getElementById('nextSampleBtn').className = 'nextSampleBtn nextSampleBtn-dark'
            document.getElementById('setting-container').className = 'setting-container setting-container-dark'

        break
        case 'pe-li' :
            document.getElementById('body').className = 'body body-persian'
            document.getElementById('intrduse-container').className = 'intrduse-container intrduse-container-persian'
            document.getElementById('aboutApp').className = 'aboutApp aboutApp-persian'
            document.getElementById('aboutMe').className = 'aboutMe aboutMe-persian'
            document.getElementById('navbar').className = 'navbar navbar-persian'
            document.getElementById('workSamples-container').className = 'workSamples-container workSamples-container-persian'
            document.getElementById('prevSampleBtn').className = 'prevSampleBtn prevSampleBtn-persian'
            document.getElementById('nextSampleBtn').className = 'nextSampleBtn nextSampleBtn-persian'
            document.getElementById('setting-container').className = 'setting-container setting-container-persian'

        break
        case 'pe-da' :
            document.getElementById('body').className = 'body body-persian body-dark'
            document.getElementById('intrduse-container').className = 'intrduse-container intrduse-container-persian intrduse-container-dark'
            document.getElementById('aboutApp').className = 'aboutApp aboutApp-persian aboutApp-dark'
            document.getElementById('aboutMe').className = 'aboutMe aboutMe-persian aboutMe-dark'
            document.getElementById('navbar').className = 'navbar navbar-persian navbar-dark'
            document.getElementById('workSamples-container').className = 'workSamples-container workSamples-container-persian workSamples-container-dark'
            document.getElementById('prevSampleBtn').className = 'prevSampleBtn prevSampleBtn-persian prevSampleBtn-dark'
            document.getElementById('nextSampleBtn').className = 'nextSampleBtn nextSampleBtn-persian nextSampleBtn-dark'
            document.getElementById('setting-container').className = 'setting-container setting-container-dark setting-container-persian setting-container-dark'
        break
    }
}