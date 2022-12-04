import {h} from 'preact';
import style from './style.css';
import {InstagramEmbed} from 'react-social-media-embed';


const Miniatures = () => (
    <div class={style.miniatures}>
        <h2>Miniatures</h2>
        <MiniatureList/>
    </div>
);

const MiniatureList = () => (
    <div class={style.miniature}>
        <section>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <InstagramEmbed url="https://www.instagram.com/p/CXM0Y9APOob/" width={328} placeholderDisabled={true}/>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <InstagramEmbed url="https://www.instagram.com/p/Cg5qCdILDyH/" width={328} placeholderDisabled={true}/>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <InstagramEmbed url="https://www.instagram.com/p/CeKp7QgLPHq/" width={328} placeholderDisabled={true}/>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <InstagramEmbed url="https://www.instagram.com/tv/CWjmImttYIb/" width={328} placeholderDisabled={true}/>
            </div>
        </section>
    </div>
)

export default Miniatures;
