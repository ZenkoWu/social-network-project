import preloader from '../../../img/Spinner-1s-200px.svg'
const Preloader = (props) => {
  return(
    <div>
        <img src={preloader} style={{width: '100px'}}/>
    </div>
  )
}

export default Preloader;