import classes from './portfolio.module.css';
import { useState } from 'react';
import { projects } from './projects';  

const ProjectList = ({ projects }) => {

    return (
        <>
            { projects.map(item => {
                const alt = item.match(/([^/]*).(png|jpg)/)[1]
                console.log(item);
                return <img key={ Math.random() } src={ item } alt={ alt } /> 
            }
            ) }
        </>
    )

}

const Toolbar = (props) => {

    const { filters, selected, onSelectFilter } = props;

    const buttons = [];

    filters.forEach((item) => {

        const buttonElement = <button onClick = { onSelectFilter } key={ item } className={ `${ classes["filter-button"] }
            ${ item === selected ? classes["selected"] : ''}` }>{ item }</button>;

        buttons.push(buttonElement); 

    });

    return (
        <>
            <div className={ classes["filter-buttons-container"] }>
                { buttons }
            </div>
        </>
    )

}

const Portfolio = () => {

    const filters = [ "All", "Websites", "Flayers", "Business Cards" ];
    const initialSelected = "All"
    let [selected, setSelected] = useState(initialSelected);

    const onSelectFilter = (event) => { 

        setSelected(selected = event.target.innerText);
    };

    const filterBy = (obj) => {

        if ( selected === "All") {
            return true;
        } else if ( obj.category === selected ) {
            return true;
        }

    }

    const filteredProjects = projects.filter(filterBy).map(item => item.img);
        

    return (
        <>
            <div className={ classes["portfolio-container"] }>
            <h1 className={ classes["portfolio-title"] }>Portfolio</h1>
                < Toolbar
                    filters = { filters }
                    selected = { selected }
                    onSelectFilter = { onSelectFilter }
                />
                    <div className={ classes["projects-container"] }>
                        <ProjectList projects = { filteredProjects }/>
                    </div>
            </div>
            
        </>
    )

}

export { Portfolio };


