import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
   // viết mảng acout khi ấn vào thẻ input một cái gì đó và sẽ hiện ra mảng acout
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2]); // sau 3s thì mảng có thêm 2 kết quả tìm kiếm
      }, 0);
   }, []);
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />
            <Tippy
               // để có thể tương tác với nội dung bên trong thì phải dùng props interactive, interactive: mặc định là false
               interactive // thêm vào đây là true
               visible={searchResult.length > 0} // nếu kết quả tìm kiếm > 0 thì mới thì mới hiện
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search accounts and videos" spellCheck={false} />

                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>

            <div className={cx('action')}>
               <Button text>Upload</Button>
               <Button primary  leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>

            </div>
         </div>
      </header>
   );
}

export default Header;
