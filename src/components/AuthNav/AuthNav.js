import { NavLink } from 'react-router-dom';
import routes from './../../routes';

export default function AuthNav(){

    return(
        <>
        <NavLink exact to={routes.register} className="NavLink" activeClassName="NavLink--active">Регистрация</NavLink>
        <NavLink to={routes.login} className="NavLink" activeClassName="NavLink--active">Войти</NavLink>
        </>
    )
}