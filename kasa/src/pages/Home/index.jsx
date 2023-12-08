import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Gallery from "../../components/Gallery"

function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
            <Gallery/>
			<Footer />
		</div>
	)
}

export default Home