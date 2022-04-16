

const ITprofile = () => {
    return (
        <div>
            <h1 className='page__title'>IT-projects</h1>
            <p className='page__subtitle'>I am a junior frontend developer.</p>
            <p className='page__subtitle'>
Graduated from Plekhanov Russian University of Economics, Faculty of Applied Informatics in Economics. 
The teaching was aimed at applying the theoretical and practical foundations of computer science to solving specific problems in certain applied fields. 
I have performed well in such fields as information technology, mathematics, economics and management.
 The final of the training was the defense of a project to create a mobile application for a chain of coffee shops.
He also completed training in the Yandex platform, in the direction of web developer.</p>
            <h2 className='page__title_part'>Part of yandex educational projects:</h2>
            <div class="it-profile">
                <a class="it-profile__link  loading" href='https://maximtertyshnyi.github.io/how-to-learn/' title="YouTube video player" ><img className='it-profile__img' src='https://repository-images.githubusercontent.com/400272637/91aebf4e-d2a0-4a3d-8699-f1d36002bd74' /></a>
                <a class="it-profile__link loading" href='https://maximtertyshnyi.github.io/russian-travel/' title="YouTube video player" ><img className='it-profile__img' src='https://repository-images.githubusercontent.com/409318005/07be32d6-b568-4b15-98cb-3a7b4a7650a3' /></a>
                <a class="it-profile__link loading" href='https://maximtertyshnyi.github.io/mesto/' title="YouTube video player" ><img className='it-profile__img' src='https://repository-images.githubusercontent.com/417428585/a8c5b8d6-f1de-4ef3-aacc-b1696d119018' /></a>
            </div>
            <h3 className='page__title_part'>Participated in the development of:</h3>
            <div class="it-profile">
                <a class="it-profile__link loading" href='https://apps.apple.com/ru/app/surf-club/id1561341054' title="YouTube video player" ><img className='it-profile__img' src='https://4.downloader.disk.yandex.ru/preview/bf54d2abb9d891e914cd78b07035c69e0269f5ef06fb7553544ad379deee1bc0/inf/Ur_93iV3oWMoAN4RLFkwrUAQfup0VGp1lpIVeYXwJJ0CCLLDg4uOWCC0_XMdtVL30xgkApbB3ihnxuIatnwBHw%3D%3D?uid=1452466182&filename=%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-04-16%20%D0%B2%2016.33.18.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1452466182&tknv=v2&size=3504x938' /></a>
            </div>
            <h4 className='page__title_part'>Link to my github:</h4>
            <ul class="page__social-icons">
                <li><a class="page__social-icon_github pulse" href="https://github.com/MaximTertyshnyi" title="GitHub" target="_blank" rel="noopener"></a></li>
            </ul>
        </div>
        
    )
}

export {ITprofile}