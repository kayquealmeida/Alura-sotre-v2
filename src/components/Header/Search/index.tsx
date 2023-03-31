import style from './Search.module.scss';


export default function Search() {
  return (
      <div className={style.search__content}>
        <input type="text" id='search' name='search' className={style.search__bar} placeholder="Buscar" />
        <label htmlFor="search" className={style.search__label}><span className={style.search__text}>Buscar</span></label>

      </div>
  )
}