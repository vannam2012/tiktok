import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
   return (
      <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
         <p>{data.title}</p>
      </Button>
   );
}

export default MenuItem;
