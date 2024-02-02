import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Banner() {

	const [aboutPage, setAboutPage] = useState(false);

	const localisation = useLocation();
	
	
	useEffect(() => {
		if(localisation.pathname === '/a-propos'){
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_apropos' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}

export default Banner