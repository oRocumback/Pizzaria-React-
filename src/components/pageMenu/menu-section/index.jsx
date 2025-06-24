import './style.css'
import CardPizza from '../../cardPizza'
import pizza01 from '../../../assets/pizzas/pizza01.png'
import pizza02 from '../../../assets/pizzas/pizza02.png'
import pizza03 from '../../../assets/pizzas/pizza03.png'
import pizza04 from '../../../assets/pizzas/pizza04.png'
import pizza05 from '../../../assets/pizzas/pizza05.png'
import pizza06 from '../../../assets/pizzas/pizza06.png'

const MenuSection = () => {
    return (
        <section className="cardapio-section">

            <h2>Cardápio Completo</h2>

            <div className="menu-grid">
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza02} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza03} pizzaName="Pizza de polvo" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza04} pizzaName="Pizza de peperoni" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza05} pizzaName="Pizza de marguerita" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza06} pizzaName="Pizza de peperoni com catupiri" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           
                <CardPizza pizzaImage={pizza01} pizzaName="Pizza de calabresa" pizzaIngredients="Tradicional, com bastante sabor e crocância"/>                                                           

            </div>
        </section>
    )
}

export default MenuSection