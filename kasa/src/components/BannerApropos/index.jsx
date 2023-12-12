import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function BannerApropos() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			
		</section>
	)
}

export default BannerApropos