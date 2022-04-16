
const Music = () => {
    return (
        <div>
            <h1 className='page__title'>Musical projects</h1>
            <p className='page__subtitle'>Here are my works in the field of music.</p>
            <p className='page__subtitle'>From soundtracks and lyrical music, to collaborative projects and exciting shows.</p>
            <div class="page__iframes">
                <iframe class="page__iframe loading" src="https://www.youtube.com/embed/62o1jKN8tC0" title="YouTube video player" allowfullscreen></iframe>
                <iframe class="page__iframe loading" src="https://www.youtube.com/embed/rzZ_RKnE_tg" title="YouTube video player" allowfullscreen></iframe>
                <iframe class="page__iframe loading" src="https://www.youtube.com/embed/1zfMFsQaiEs" title="YouTube video player" allowfullscreen></iframe>
                <iframe class="page__iframe loading" src="https://www.youtube.com/embed/VJ08gGLDL9g" title="YouTube video player" allowfullscreen autoplay></iframe>
            </div>
            <div className='page__audio'>
                <iframe className='page__audio_song loading' autoplay='0' frameborder="0" src="https://music.yandex.ru/iframe/#track/103647737/22199414">Слушайте <a href='https://music.yandex.ru/album/22199414/track/103647737'>Storm</a> — <a href='https://music.yandex.ru/artist/13600816'>Max Tertyshnyi</a> на Яндекс.Музыке</iframe>
                <iframe className='page__audio_song loading' frameborder="0" src="https://music.yandex.ru/iframe/#track/93752329/18928061">Слушайте <a href='https://music.yandex.ru/album/18928061/track/93752329'>Cosmo</a> — <a href='https://music.yandex.ru/artist/13600816'>Max Tertyshnyi</a> на Яндекс.Музыке</iframe>
                <iframe className='page__audio_song loading' frameborder="0" src="https://music.yandex.ru/iframe/#track/103949983/22298584">Слушайте <a href='https://music.yandex.ru/album/22298584/track/103949983'>You</a> — <a href='https://music.yandex.ru/artist/13600816'>Max Tertyshnyi</a> на Яндекс.Музыке</iframe>

            </div>
            <ul class="page__social-icons">
                <li><a class="page__social-icon_applemusic pulse" href="https://music.apple.com/ru/artist/max-tertyshnyi/1591737334" title="Apple" target="_blank" rel="noopener"></a></li>
                <li><a class="page__social-icon_spotyfy pulse" href="https://open.spotify.com/artist/5LEOcNXE7fCP6dZ6olOw09?si=Cc427jdrRdm6C4-fXUTEGQ" title="..." target="_blank" rel="noopener"></a></li>
                <li><a class="page__social-icon_soundcloud pulse" href="https://soundcloud.com/user-535080265" title="..." target="_blank" rel="noopener"></a></li>
                <li><a class="page__social-icon_youtube pulse" href="https://www.youtube.com/channel/UCnieMuJ944jEdUbmeJEsZVw" title="..." target="_blank" rel="noopener"></a></li>
            </ul>
        </div>
    )
}

export {Music}
