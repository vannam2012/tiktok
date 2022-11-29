import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5bf64c9109218c0df185a3bf3c8c9f3a.jpeg?x-expires=1669863600&x-signature=1AVVKzZYy6PNUX2IefewYC4qh7I%3D" alt="Hoa"/>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
            <span className={cx('username')}>nguyenvana</span>

        </div>
    </div>
}

export default AccountItem;