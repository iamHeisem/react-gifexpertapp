import React, { Fragment } from 'react'
import { useFetchGift } from '../hooks/useFetchGift'
import {GifGridItem} from './GifGridItem';

export const GifGrid =  ({category}) => {

    //Cuando esta el : es para combiar el nombre de los usestate
   const {data:images, loading} = useFetchGift(category);

    return (
    <Fragment>

        <h3 className="animate__animated animate__fadeInUp">{category}</h3>
        
        {/* cuando se utiliza el && es cuando por defecto se retornada un null */}
        {loading && <p className="animate__animated animate__flash">Loading...</p> }

         <div className="card-grid">  
                {
                    images.map( img =>(
                        
                        <GifGridItem
                        key={img.id} 
                        { ...img }
                        
                        />
                    ))    
                } 
        </div> 
        </Fragment>
    )
}
