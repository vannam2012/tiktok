import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Menu.module.scss'

const cx = classNames.bind(styles)


function Menu({children, items= [] }) {

   const renderItem = () =>{
      return items.map((item, index) => (
         <MenuItem  key={index} data={item}/>
      ))
   }
    return (
        <Tippy
        // để có thể tương tác với nội dung bên trong thì phải dùng props interactive, interactive: mặc định là false
        interactive // thêm vào đây là true
        delay={[0, 500]} // show luôn, hide: ẩn sau 500ms 
        visible
        placement="bottom-end" //vị trí
        render={(attrs) => (
           <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
              <PopperWrapper className={cx('menu-popper')}>
                {renderItem()}
              </PopperWrapper>
           </div>
        )}
     >
        
        {children}
     </Tippy>
    )
}

export default Menu;