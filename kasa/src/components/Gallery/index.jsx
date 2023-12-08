import './gallery.scss'
import Logements from '../../data/logements.json'
import Card from '../Card'

function Gallery() {
    return (
        <main className='home_gallery'>
            {Logements.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    )
}

export default Gallery