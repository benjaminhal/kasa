import './footer.scss'
import Logo from '../../assets/logo_footer.png'

function Footer() {
	return (
		<footer className='footer'>
            <div>
                <img src={Logo} alt="logo KASA" />
                <p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
            </div>
		</footer>
	)
}

export default Footer