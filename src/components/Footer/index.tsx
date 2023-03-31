import style from './Footer.module.scss';
import logoFooter from '../../assets/images/logo__footer.svg';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <img src={logoFooter} alt="" className={style.footer__logo} />
    </footer>
  )
}