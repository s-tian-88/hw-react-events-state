import classes from './store.module.css';
import { products } from './products';
import { useState } from 'react';

const Store = () => {

    let defaultIconState = "view_module";
    let [ iconView, setIconView ] = useState(defaultIconState);

    const onSwitch = () => {
        setIconView(iconView = iconView === "view_module" ? "view_list" : "view_module");
    }

    const Component = iconView === "view_module" ? CardsView : ListView

    return (
        <div className={ classes["store-container"] }>
            <header className={ classes["store-header"] }>
                <label className={ classes["store-header-title"] }>Store</label>
                <IconSwitch 
                    icon={ iconView }
                    onSwitch={ onSwitch }
                />
            </header>
            <Component products = { products }/>
        </div>
    )

}

const IconSwitch = (props) => {

    const { icon, onSwitch } = props;

    const btn = <button
                    className={ `${ classes["view-switch-btn"] } ${ classes[icon] }` }
                    onClick={ onSwitch }>
                </button>;

    return (
        btn
    )

};

const CardsView = (props) => {

    const { products } = props;

    const productsReact = products.map(
        item => <ShopCard
                product = { item }
                key = {`${item.name}${item.color}${item.price}`} 
        />
    );

    return (
        <div className={ classes["cards-view"] } >
            { productsReact }
        </div>
    )

};
const ShopCard = (props) => {

    const { product } = props;
    const currency = "$";

    const productCardElement = (
        <div className={ classes["shop-card"] }  >
            <header className={ classes["shop-card-header"] }>
                <div className={ classes["shop-card-title"] }>{ product.name }</div>
                <div className={ classes["shop-card-color"] }>{ product.color }</div>
            </header>
            <main className={ classes["shop-card-main"] }>
                <img className = { classes["shop-card-img"] } src={ product.img } alt={ product.name } />
            </main>
            <footer className={ classes["shop-card-footer"] }>
                <div className={ classes["shop-card-price"] }>{ currency } { product.price }</div>
                <button className={ classes["add-to-cart-btn"] }>Add to cart</button>
            </footer>
        </div>
    )

    return (
        productCardElement
    )

};


const ListView = (props) => {

    const { products } = props;

    const productsReact = products.map(
        item => <ShopItem
                product = { item }
                key = {`${item.name}${item.color}${item.price}`} 
        />
    );

    return (
        <div className={ classes["list-view"] } >
            { productsReact }
        </div>
    )

};
const ShopItem = (props) => {

    const { product } = props;
    const currency = "$";

    const el = <div className={ classes["shop-item"] }>
        <img className={ classes["shop-item-preview"] } src={ product.img } alt={ product.name } />
        <div className={ classes["shop-item-name"] }>{ product.name }</div>
        <div className={ classes["shop-item-color"] }>{ product.color }</div>
        <div className={ classes["shop-item-price"] }>{ currency } { product.price }</div>
        <button className={ classes["add-to-cart-btn"] }>Add to cart</button>
    </div>;

    return el;
};

export { Store };
