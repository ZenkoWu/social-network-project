import styles from './User.module.css'

const User = (props) => {

    return (
        <div>
            <div>
                <img src="https://coolsen.ru/wp-content/uploads/2021/06/81-6.jpg" className={styles.userImg} />
                <button>Follow</button>
            </div>
            <div>
                {props.fullName}
                {props.status}
                {props.location}
            </div>

        </div>

    )
} 

export default User;
