import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () =>{}

// items = [] : trang nhất , câp 1
function Menu({ children, items = [], onChange = defaultFn }) {
   // lịch sử đi vào trang
   const [history, setHistory] = useState([{ data: items }]); // items là các phần tử trang 
   // gọi cái hiện tại là
   const current = history[history.length - 1];
   // sẽ render từ curent là phần tử cuối mảng :{data: items},  .data thì sẽ lấy đc items
   const renderItem = () => {
      return current.data.map((item, index) => {
         // check để xem phần tử nào có menu cấp 2 là children
         const isParent = !!item.children; // những thằng k có children sẽ là undefined, có children sẽ là object
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     // nếu là children thì handle vào cấp 2
                     setHistory(prev => [...prev, item.children]); // push thêm vào mảng để còn phân rã ra cấp 2
                  }
                  else{
                     onChange(item)
                  }
               }}
            />
         );
      });
   };
   return (
      <Tippy
         interactive // để có thể tương tác với nội dung bên trong thì phải dùng props interactive,
         delay={[0, 500]}
         offset= {[12, 8 ]}
         placement="bottom-end" //vị trí
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PopperWrapper>
                {history.length > 1 &&  <Header title="Language"  onBack={() =>{
                  setHistory(prev => prev.slice(0, prev.length - 1)) // cắt từ phần tử số 0 đến phần tử gần cuối
                }}/> }
                  {renderItem()}
               </PopperWrapper>
            </div>
         )}
         onHidden={() => setHistory(prev => prev.slice(0, 1))} // chỉ lấy từ cấp 0 -> cấp 1
      >
         {children}
      </Tippy>
   );
}

export default Menu;
