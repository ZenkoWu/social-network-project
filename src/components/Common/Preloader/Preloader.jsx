import preloader from '../../../img/Spinner-1s-200px.svg'
const Preloader = (props) => {
  return(
    <div style={{margin: '10px auto', textAlign: 'center'}}>
        <img src={preloader} style={{width: '100px'}}/>
    </div>
  )
}

export default Preloader;