import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from './../../routes';
import {authSelectors} from './../../redux/auth'

function Navigation(){

    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

    return(
        <>
            <NavLink exact to={routes.home} className="NavLink" activeClassName="NavLink--active">На главную</NavLink>
            {isAuthenticated && <NavLink to={routes.contacts} className="NavLink" activeClassName="NavLink--active">Контакты</NavLink>}
        </>
    )
}



export default Navigation