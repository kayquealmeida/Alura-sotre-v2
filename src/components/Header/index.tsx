import logo from '../../assets/images/logo__header.svg';
import Checkout from './Checkout';
import style from './Header.module.scss';
import Navigation from './Navigation';
import Search from './Search';
import styleLimiter from '../../assets/scss/ContentLimiter.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={styleLimiter.content__limiter}>
        <a href="#"><img src={logo} alt="Logo Header" className={style.header__logo}/></a>
        <Navigation />
        <Search />
        <Checkout />
      </div>
    </header>
  )
}