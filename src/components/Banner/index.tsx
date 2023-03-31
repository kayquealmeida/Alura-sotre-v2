import bannerImg from '../../assets/images/banner.svg';
import style from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={style.banner__content}>
      <img src={bannerImg} alt="Banner" className={style.banner__image} />
    </div>
  )
}