import style from './Product.module.scss';

export default function Product(
  {category, imgUrl, productName, productPrice}:
  {
    category: string,
    imgUrl: string,
    productName: string,
    productPrice: string
  }
) {
  return (
    <div className={style.product} data-category={category}>
      <img src={imgUrl} alt="Product" className={style.productImg} />
      <div className={style.categoryType}>
        <span className={style.productText}>{productName}</span>
        <span className={style.productText}>R$ {productPrice}</span>
      </div>
    </div>
  )
}