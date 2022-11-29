import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   to,
   primary = false,
   outline = false,
   small = false,
   large = false,
   text = false,
   disable,
   rounded = false,
   href,
   children,
   className,
   leftIcon,
   righItcon,
   onClick,
   ...passProps
}) {
   // mặc định comp là thẻ btn
   let Comp = 'button';
   // tạo props
   const props = {
      onClick,
      ...passProps,
   };
   
   //Remove event listener when btn is disable
   if(disable){
        Object.keys(props).forEach(key => {
            if(key.startsWith('on') && typeof[key] === 'function'){ // nếu trong Object đấy có key bắt đầu = on và là funcion thì xoá cái sự kiện đấy đi 
                delete props[key]
            }  
        }) 
   }
   if (to) {
      // to là link nội bộ nên dùng Link của rect-router-dom
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      small,
      large,
      text,
      disable,
      rounded,
      leftIcon,
      righItcon
   });

   return (
      <Comp className={classes} {...props}>
        {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} 
         <span className={cx('title')}>{children}</span>
        {righItcon && <span className={cx('icon')}>{righItcon}</span>}
      </Comp>
   );
}

export default Button;
