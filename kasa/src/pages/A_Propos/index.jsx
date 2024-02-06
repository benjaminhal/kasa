import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import './aPropos.scss'
import infos from './infos.json'



function A_Propos() {

	return (
		<div>
			<Banner/>
			<main className='aPropos'>
				{infos.map(data => {
					return (
						<div key={data.id} className="aPropos_collapse">
							<Collapse className="collapseAPropos" style={{margin:'30px 0'}}  title={data.title} content={data.content} />
						</div>
					)}
				)}
			</main>
		</div>
	)
}

export default A_Propos