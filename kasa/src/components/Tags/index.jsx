import './tags.scss'


function Tags({tags}){
  return(  
        <div className='d-flex row'>
            {
            tags.map((tag) => {
                return ( 
                    <p key={tag}  className='tag'>{tag}</p>
                )
            })
            }
        </div>
  )   
    
}

export default Tags