import {HeaderOnly} from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    { path: '/upload', component: Upload,  layout: HeaderOnly},
    { path: '/search', component: Search,  layout: null},




] // publicRoutes: dùng cho routes không cần dăng nhập , vẫn xem đc 

const privateRoutes = []//privateRoutes: phải đăng nhập mới vào đc, không thì sẽ lái sang trang login 

export  { publicRoutes, privateRoutes };