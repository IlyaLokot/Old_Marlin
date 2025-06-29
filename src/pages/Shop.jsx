import { React, useState } from 'react'
import './Shop.css'
import Cart from './Cart'



const armors = [
    {
        id: 1,
        img: "/item_images/stupid_paladin_s_helmet.jpg",
        name: "Шлем глупого паладина",
        category: "Шлем",
        price: 120,
        description: "Жмёт уши, но отбивает стрелу раз в неделю",
        section: "Броня"
    },
    {
        id: 2,
        img: "/item_images/helmet_bear_s_head.jpg",
        name: "Медвежья башка",
        category: "Шлем",
        price: 250,
        description: "Выделяется на фоне, привлекает стрелков",
        section: "Броня"
    },
    {
        id: 3,
        img: "/item_images/helmet_bucket.jpg",
        name: "Медный таз",
        category: "Шлем",
        price: 30,
        description: "Плохая идея, но дешевле не найти",
        section: "Броня"
    },
    {
        id: 4,
        img: "/item_images/dad_s_armor.jpg",
        name: "Кольчуга деда",
        category: "Доспех",
        price: 180,
        description: "Пахнет стариком, но держит удар",
        section: "Броня"
    },
    {
        id: 5,
        img: "/item_images/leather_armor.jpg",
        name: "Кожаный нагрудник",
        category: "Доспех",
        price: 90,
        description: "Носили барды, пока не умерли",
        section: "Броня"
    },
    {
        id: 6,
        img: "/item_images/metallic_armor.jpg",
        name: "Пластины забвения",
        category: "Доспех",
        price: 520,
        description: "Ты их надел — тебя забыли",
        section: "Броня"
    },
    {
        id: 7,
        img: "/item_images/leather_cuisses.jpeg",
        name: "Бахилы монаха",
        category: "Поножи",
        price: 60,
        description: "Больше для танцев, чем для боя",
        section: "Броня"
    },
    {
        id: 8,
        img: "/item_images/dirty_cuisses.jpg",
        name: "Кожаные поножи",
        category: "Поножи",
        price: 110,
        description: "Скользкие, но крепкие",
        section: "Броня"
    },
    {
        id: 9,
        img: "/item_images/cuisses_of_centaur.jpg",
        name: "Ноги кентавра",
        category: "Поножи",
        price: 190,
        description: "Если ты не кентавр — это больно",
        section: "Броня"
    }
];


const weapons = [
    {
        id: 10,
        img: "/item_images/rusty_sword.jpg",
        name: "Ржавый меч",
        category: "Клинковое",
        price: 70,
        description: "Каждый удар — как прививка столбняка",
        section: "Оружие"
    },
    {
        id: 11,
        img: "/item_images/sword_of_cilence.jpg",
        name: "Клинок молчания",
        category: "Клинковое",
        price: 220,
        description: "После него никто не говорит",
        section: "Оружие"
    },
    {
        id: 12,
        img: "/item_images/plastic_sword.jpg",
        name: "Засадная сабля",
        category: "Клинковое",
        price: 25,
        description: "Охо-хо йо-хо-хо и бутылка в Роме",
        section: "Оружие"
    },
    {
        id: 13,
        img: "/item_images/giant_mace.jpg",
        name: "Орочья дубина",
        category: "Дробящее",
        price: 130,
        description: "Ты уверен?",
        section: "Оружие"
    },
    {
        id: 14,
        img: "/item_images/hammer.jpg",
        name: "Молот правосудия",
        category: "Дробящее",
        price: 270,
        description: "Решает споры быстро, жестко, насмерть",
        section: "Оружие"
    },
    {
        id: 15,
        img: "/item_images/nice_stik.jpg",
        name: "Дубинка сторожа",
        category: "Дробящее",
        price: 90,
        description: "Угроза, которую слышно",
        section: "Оружие"
    },
    {
        id: 16,
        img: "/item_images/spear.jpg",
        name: "Копьё простолюдина",
        category: "Древковое",
        price: 80,
        description: "Диды на мамонта ходили",
        section: "Оружие"
    },
    {
        id: 17,
        img: "/item_images/hamberg.jpg",
        name: "Алебарда 'Гроза ног'",
        category: "Древковое",
        price: 240,
        description: "Разрубает и коверкает. Особенно ноги.",
        section: "Оружие"
    },
    {
        id: 18,
        img: "/item_images/stikle.jpg",
        name: "Коса молчания",
        category: "Древковое",
        price: 210,
        description: "Смерть подкралась незаметно",
        section: "Оружие"
    }
];


const potions = [
    {
        id: 19,
        name: "Ночное зрение +5",
        category: "Зелье",
        price: 100,
        description: "Видишь в темноте. Даже то, что не хотел",
        section: "Зелья"
    },
    {
        id: 20,
        name: "Зелье силы",
        category: "Зелье",
        price: 140,
        description: "Ты крушишь. Потом отрубаешься",
        section: "Зелья"
    },
    {
        id: 21,
        name: "Живой снова",
        category: "Зелье",
        price: 180,
        description: "Полностью лечит, но может стать зомби",
        section: "Зелья"
    },
    {
        id: 22,
        name: "Эликсир выносливости",
        category: "Зелье",
        price: 110,
        description: "Бегаешь как бешеный барсук",
        section: "Зелья"
    }
];


const clothes = [
    {
        id: 23,
        name: "Накидка нищего",
        img: "/item_images/green_cloak.jpg",
        category: "Одежда",
        price: 40,
        description: "Пахнет грустью, но тёплая",
        section: "Одежда"
    },
    {
        id: 24,
        name: "Плащ интригана",
        img: "/item_images/futuristic-jacket.jpg",
        category: "Одежда",
        price: 120,
        description: "Скрывает лицо и намерения",
        section: "Одежда"
    },
    {
        id: 25,
        name: "Балахон мага",
        img: "/item_images/coat_of_magic.jpg",
        category: "Одежда",
        price: 150,
        description: "Не увеличивает интеллект. Просто балахон.",
        section: "Одежда"
    },

    // 👢 Обувь
    {
        id: 26,
        name: "Сандалии терпения",
        img: "/item_images/shoes_wood.jpg",
        category: "Обувь",
        price: 60,
        description: "Боль + духовный рост",
        section: "Одежда"
    },
    {
        id: 27,
        name: "Сапоги священника",
        img: "/item_images/cowboy_boots.jpg",
        category: "Обувь",
        price: 100,
        description: "Шумят как божественный гром",
        section: "Одежда"
    },
    {
        id: 28,
        name: "Ботинки бегуна",
        img: "/item_images/rugby_boots.jpg",
        category: "Обувь",
        price: 130,
        description: "Прыжок как у сайгака",
        section: "Одежда"
    },

    // 🧢 Головные уборы
    {
        id: 29,
        name: "Капюшон грусти",
        category: "Головной убор",
        price: 35,
        description: "Ты в нем будто уже проиграл",
        section: "Одежда"
    },
    {
        id: 30,
        name: "Цилиндр колдуна",
        category: "Головной убор",
        price: 95,
        description: "Пахнет пеплом и проклятием",
        section: "Одежда"
    },
    {
        id: 31,
        name: "Берет поэта",
        category: "Головной убор",
        price: 50,
        description: "Легко отлетает от ветра и пощёчины",
        section: "Одежда"
    }
];


export default function Shop({ setItemInBasket }) {
    function addItems(a) {
        setItemInBasket((prev) => [...prev, a])
        return;
    }

    return (
        < div className="catalog" >
            <h2 className='rubric'>Броня</h2>
            <div className='section'>
                {armors.map((item) => (
                    <Cart
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        category={item.category}
                        price={item.price}
                        add={() => addItems(item)}
                    />
                ))}
            </div>
            <h2 className='rubric'>Оружие</h2>
            <div className="section">
                {weapons.map((item) => (
                    <Cart
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        category={item.category}
                        price={item.price}
                        add={() => addItems(item)}
                    />
                ))}
            </div>
            <h2 className="rubric">Одежда и обувь</h2>
            <div className="section">
                {clothes.map((item) => (
                    <Cart
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        category={item.category}
                        price={item.price}
                        add={() => addItems(item)}
                    />
                ))}
            </div>
            <h2 className="rubric">Зелья</h2>
            <div className="section">
                {potions.map((item) => (
                    <Cart
                        key={item.id}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        category={item.category}
                        price={item.price}
                        add={() => addItems(item)}
                    />
                ))}
            </div>
        </div >

    )

}