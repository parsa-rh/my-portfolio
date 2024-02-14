export default function uiHandler(language, darkMode){
    var classType = ''

    if (language === 'english')
        {classType = 'en'}
    else if (language === 'persian')
        {classType = 'pe'}

        
    switch(classType){
        case 'en' :
            document.getElementById('body').className = 'body'
            document.getElementById('intrduse-container').className = 'intrduse-container'
            // document.getElementById('aboutApp').className = 'aboutApp'
            // document.getElementById('aboutMe').className = 'aboutMe'
            document.getElementById('po-navbar').className = 'po-navbar'
            document.getElementById('po-navbar-links').className = 'po-navbar-links'
            document.getElementById('workSamples-container').className = 'workSamples-container'
            document.getElementById('workSample').className = 'workSample'
            document.getElementById('workSample-about').className = 'workSample-about'
            document.getElementById('workSample-about-topic').className = 'workSample-about-topic'
            document.getElementById('workSample-image').className = 'workSample-image'
            document.getElementById('prevSampleBtn').className = 'prevSampleBtn'
            document.getElementById('nextSampleBtn').className = 'nextSampleBtn'
            document.getElementById('about-container').className = 'about-container'
            document.getElementById('about-nav-container').className = 'about-nav-container'
            document.getElementById('about-info-container').className = 'about-info-container'
        break

        case 'pe' :
            document.getElementById('body').className = 'body body-persian'
            document.getElementById('intrduse-container').className = 'intrduse-container intrduse-container-persian'
            document.getElementById('po-navbar').className = 'po-navbar po-navbar-persian'
            document.getElementById('po-navbar-links').className = 'po-navbar-links po-navbar-links-persian'
            document.getElementById('workSamples-container').className = 'workSamples-container workSamples-container-persian'
            document.getElementById('workSample').className = 'workSample workSample-persian'
            document.getElementById('workSample-about').className = 'workSample-about workSample-about-persian'
            document.getElementById('workSample-about-topic').className = 'workSample-about-topic workSample-about-topic-persian'
            document.getElementById('workSample-image').className = 'workSample-image workSample-image-persian'
            document.getElementById('prevSampleBtn').className = 'prevSampleBtn prevSampleBtn-persian'
            document.getElementById('nextSampleBtn').className = 'nextSampleBtn nextSampleBtn-persian'
            document.getElementById('about-container').className = 'about-container about-container-persian'
            document.getElementById('about-nav-container').className = 'about-nav-container about-nav-container-persian'
            document.getElementById('about-info-container').className = 'about-info-container about-info-container-persian'
        break
    }
}