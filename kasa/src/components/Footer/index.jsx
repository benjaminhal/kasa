import './footer.scss'
import Logo from '../../assets/logo_footer.png'

export default function Footer() {
	return (
		<footer className='footer'>
            <div>
                <img src={Logo} alt="logo KASA" />
                <p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
            </div>
		</footer>
	)
}