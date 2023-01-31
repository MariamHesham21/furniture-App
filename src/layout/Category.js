import React from 'react'
import '../style/Category.css';


const Category = () => {
  return (
    <div className='category'>
      <div className='category-left'>
        <h3> Top Categories </h3>
        <button> Show More</button>
      </div>
      <div className='category-right'>
      <div className='catitem1'>
        <div className='catitemh'>
          <img src="https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" width={400} height={500}/>
          <p>Dining Room </p>
        </div>
        <div className='catitemh'>
          <img src="https://media.istockphoto.com/id/1264323513/photo/scandinavian-bedroom-interior-stock-photo.jpg?s=612x612&w=0&k=20&c=jYMbmLtLDOezPThalkXCfrKjbgkYHpQX2oY3-vjPhVI=" alt="" width={400} />
          <p>Dining Room </p>
        </div>
      </div>
      <div className='catitem2'>
        <div className='catitemh'>
          <img src="https://media.istockphoto.com/id/1198843341/photo/luxury-modern-living-room-3d-rendering-illustration.jpg?s=612x612&w=0&k=20&c=syUDvk0Y1tkSG2BwDHJMPF-wldsoGvNuRHRg6cgKNZk=" alt="" width={400}/>
          <p>Dining Room </p>
        </div>
        <div className='catitemh'>
          <img src="https://images.pexels.com/photos/2876787/pexels-photo-2876787.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" width={400} height={500}/>
          <p>Dining Room </p>
        </div>

      </div>
      </div>
      {/* <div className='category-header'>
        <h3> Top Categories </h3>
      </div>
      <div className='category-form'>
        <div className='catitem'> <p>Dining Room </p> </div>
        <div className='catitem'> <p>Bedroom</p> </div>
        <div className='catitem'> <p>Living Room</p> </div>
        <div className='catitem'> <p>Kitchen</p> </div>
        <div className='catitem'> <p>children room</p> </div>
      </div>
      <div className='category-button'>
        <button> Show More</button>
      </div> */}
    </div>
  )
}

export default Category