import style from './Checkout.module.scss';
import checkoutIcon from '../../../assets/images/checkoutIcon.svg';

export default function Checkout() {
  return (
    <>
      <img src={checkoutIcon} alt="Checkout Icon" className={style.checkout__image} />
    </>
  )
}