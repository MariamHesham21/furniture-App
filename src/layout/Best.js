import React from 'react'
import '../style/Best.css';

const Best = () => {
  return (
    <div className='Best'>
        <h1> Best Seller </h1>
        <div className='Bestforms'>
            <div className='Bestform'>
                <img src="https://images.pexels.com/photos/3771691/pexels-photo-3771691.jpeg?auto=compress&cs=tinysrgb&w=400" alt="chair" width="400"/>
                <div className='Besttext'>
                    <h3> chair </h3>
                    <p> 100 $</p>
                </div>
                <div className='Bestbutton'>
                    <button> Add to cart</button>
                    
                </div>
            </div>

            <div className='Bestform'>
                <img src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=400" alt="chair" width="400"/>
                <div className='Besttext'>
                    <h3> chair </h3>
                    <p> 300 $</p>
                </div>
                <div className='Bestbutton'>
                    <button> Add to cart</button>
                    
                </div>
            </div>

            <div className='Bestform'>
                <img src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="chair" width="400"/>
                <div className='Besttext'>
                    <h3> chair </h3>
                    <p> 500 $</p>
                </div>
                <div className='Bestbutton'>
                    <button> Add to cart</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Best