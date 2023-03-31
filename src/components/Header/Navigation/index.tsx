import style from './Navigation.module.scss'

export default function Navigation() { 
  return (
    <nav className={style.menu}>
      <ul className={style.menu__items}>
        <li className={style.menu__item}>Masculino</li>
        <li className={style.menu__item}>Feminino</li>
        <li className={style.menu__item}>Infantil</li>
      </ul>
    </nav>
  )
}