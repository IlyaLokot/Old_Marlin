import React, { useEffect, useState } from 'react'
import Cart from './Cart';

export default function Basket({ itemInBasket, setItemInBasket, money, setMoney, parcels, setParcels }) {
  function deleteItem(item) {
    setItemInBasket(arr => arr.filter((_, index) => index !== item));
  }

  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let count = 0;
    itemInBasket.map(({ price }) => count += price)
    setSum(count);
  }, [itemInBasket])

  function upBalance(e) {
    setInputValue(Number(e.target.value));
  }

  function payMent() {
    setMoney(prev => prev + inputValue);
    setInputValue('');
  }

  function buying() {
    setMoney(prev => prev - sum);
    setParcels(prev => [...prev, ...itemInBasket])
    setItemInBasket([]);
  }

  return (
    <div className='catalog'>
      <h2 className="rubric">корзина</h2>
      <div className="section">
        {(itemInBasket.length == 0) ? (
          <h2 style={{ textAlign: 'center' }}>Корзина пуста</h2>
        ) : (
          itemInBasket.map((item, index) => (
            <Cart
              key={index}
              img={item.img}
              name={item.name}
              description={item.description}
              category={item.category}
              price={item.price}
              button={"✕"}
              add={() => deleteItem(index)}
            />
          )))}
      </div>
      <h2>
        Итого к оплате: {sum}&nbsp;
        <span className='grosh'>&nbsp;₼&nbsp;</span>
        <button className="paybutton" onClick={buying}>Оплатить </button></h2>
      <h2 >
        Ваш баланс {money} <span className='grosh'>&nbsp;₼&nbsp;</span>
        <input type="number"
          placeholder={(money > 100) ?
            ('Умница давай ещё') : ('Ты нищий уёбок')}
          onChange={upBalance}
          value={inputValue}
          style={{ height: '30px', width: '300px', borderRadius: '5px', padding: '5px', textAlign: 'center', margin: '0px 20px 0px 20px' }} />
        <button className='paybutton' onClick={payMent}> ☩ Пополнить</button>
      </h2>

      <h2 className="rubric">доставки</h2>
      <div className="section">
        {parcels.length === 0 ? (
          <h2 style={{ textAlign: 'center' }}>Ты ещё ничего не купил</h2>
        ) : (
          <> 
            {parcels.map(({ img, name, description, category, price }, index) => (
              <Cart
                key={index}
                img={img}
                name={name}
                description={description}
                category={category}
                price={price}
                button={'hidden'}
              />
            ))}
            <h2 style={{ flexBasis: '100%', marginTop: '20px', textAlign:'center', fontFamily: 'Cyrillic Old' }}>Спасибо за покупку!</h2>
          </>
        )}
      </div>
    </div>
  )
}
