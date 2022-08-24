import React, { useState } from 'react'
import styles from '../FindUsers.module.css'


export default function Paginator(props) {
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
  let pages = []

  for(let i = 1; i<= pagesCount; i++) {
    pages.push(i)
  } 
  
  let portionSize = 10;
  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
      <div style={{margin: '5px auto'}}> 
      {pages.map (p => <span className ={props.currentPage == p && styles.selectedPage} onClick={()=> {props.onPageChange(p)}}>{p}</span>)}
        {/* <nav aria-label="Page navigation example" className='m-auto' style={{margin: '5px auto', textAlign: 'center'}}>
          <ul class="pagination justify-content-center">
            {portionNumber > 1 &&
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous" onClick={()=> {setPortionNumber(portionNumber - 1) }}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            }   
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
            .map(p => <li key={p} className={props.currentPage == p && styles.selectedPage}  onClick = {()=>{props.onPageChange(p)}} ><a class="page-link" href="#">{p}</a></li>)}
            { portionCount > portionNumber && 
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next" onClick={()=> {setPortionNumber(portionNumber + 1) }}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
            }
          </ul>
        </nav> */}
      </div> 
  )
}

