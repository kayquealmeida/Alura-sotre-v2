import style from './NovaColecao.module.scss';
import OrdernarPor from './OrdernarPor';
import Product from './Product';
import productsList from '../NovaColecao/Product/productList/products.json';
import imgUrl from '../../assets/images/shoe.svg';

export default function NovaColecao() {

  const productItem = productsList.products;

  return (
    <section className={style.novaColecao}>
      <div className={style.novaColecao__textOrd}>
        <h2 className={style.textOrd__text}>Nova Coleção</h2>
        <OrdernarPor />
      </div>
      <div className={style.productList}>
        {
          productItem.map((item, index) => {
            return (
              <Product 
                key={index}
                category={item.category}
                imgUrl={imgUrl}
                productName={item.productName}
                productPrice={item.productPrice}
              />
            )
          })
        }
      </div>
      {/* Change the div productList to ul and change the Product component from div to li */}
    </section>
  )
}