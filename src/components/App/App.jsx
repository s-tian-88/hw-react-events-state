import classes from './app.module.css';
import { useState } from 'react';
import { Portfolio } from '../Portfolio';
import { Store } from '../Store';

const App = () => {

    const defaultComponent = "Portfolio";
    var [component, setComponent] = useState(defaultComponent);


    const handler = (event) => {
        setComponent(component = event.target.innerHTML)
    }

    const components = [Portfolio, Store]
    const Component = components.filter(item => item.name === component)[0]

    return (
        <>
        <div className={ classes["app-buttons"] }>
            <button className={ classes["portfolio-btn"] } onClick={ handler }>Portfolio</button>
            <button className={ classes["store-btn"] } onClick={ handler }>Store</button>
        </div>
            <Component />
        </>
    )
}

export { App };
