import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';


export default function AllFoodList() {
    let meal= [
        {id: 1, src:'https://eda-land.ru/images/article/orig/2018/11/recepty-prigotovleniya-omleta-s-pomidorami.jpg',
        to:'breakfast' },
        {id: 2, src:'https://kvashenaya-kapusta.ru/wp-content/uploads/4/6/8/468800286fe4926646f124e80eb7e1f6.jpeg',
        to:'lunch' },
        {id: 3, src:'https://chocomir.com/wp-content/uploads/2021/08/s015205878.jpg',
        to:'dinner' },
        {id: 4, src:'https://adrush-5ka-games.ru/wp-content/uploads/2/3/6/236de54c2ddd56df9bbb58fc0a1d73d3.jpeg',
        to:'smooth' },
    ]

  return (
    <div className="container">
    <div  className='row mw-100'>
        {meal.map(meal => 
        <div key={meal.id}>
          <div className='col-3 py-2'>
            <div className='p-2 border border-secondary rounded-3 text-center'>
              <NavLink to={meal.to}>
                <img src={meal.src} style={{width:'100%'}}/>
              </NavLink>
            </div>
          </div>
        </в>  
        )}
    <Outlet/>
    </div>
    </div>
  )
}

