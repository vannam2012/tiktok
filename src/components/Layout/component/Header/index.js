import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faEllipsisVertical,
   faMagnifyingGlass,
   faSignIn,
   faSpinner,
   faEarthAsia,
   faKeyboard,
   faCircleQuestion,
   faGear,
   faUser,
   faCoins,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and hefp',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];

function Header() {
   const [searchResult, setSearchResult] = useState([]);

   const currentUser = true;

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2]);
      }, 0);
   }, []);

   //hanleLogic
   const hanleMenuChange = (menuItem) => {
      console.log(menuItem);
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/@queo',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/@coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Setting ',
         to: '/@setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/@logout',
         separate: true,
      },
   ]
  
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img src={images.logo} alt="Tiktok" />
            <HeadlessTippy
               interactive
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
            </HeadlessTippy>

            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <Icon icon="bi:cloud-arrow-up" />
                        </button>
                     </Tippy>
                     {/* <button className={cx('action-btn')}>
                     <Icon icon="mdi:message-outline" />
                     </button> */}
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                        Log in
                     </Button>
                  </>
               )}

               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={hanleMenuChange}>
                  {currentUser ? (
                     <img
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5bf64c9109218c0df185a3bf3c8c9f3a.jpeg?x-expires=1669863600&x-signature=1AVVKzZYy6PNUX2IefewYC4qh7I%3D"
                        className={cx('user-avatar')}
                     ></img>
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
