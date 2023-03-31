import style from './OrdernarPor.module.scss';

export default function OrdernarPor() {
  return (
    <>
      <select name="ordernar" id="ordenar" className={style.ordenarSelect}>
        <option value="" disabled>Ordenar Por</option>
        <option value="feminino">Feminino</option>
        <option value="infantil">Infantil</option>
        <option value="masculino">Masculino</option>
      </select>
    </>
  )
}