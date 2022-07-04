import styles from './OnePost.module.css'

const OnePost = (props) => {
    return (
    <div>
        <div className={styles.paddingImg}>
        <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" className= {styles.imgPost} />
      {props.text}
      <div>
      {props.likesCount} likes
      </div>
      </div> 
    </div>
  )
}

export default OnePost;