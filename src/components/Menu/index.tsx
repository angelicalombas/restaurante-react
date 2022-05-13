import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import {Link , useNavigate}  from 'react-router-dom';

export default function Menu() {
    const rotas = [{
        label: 'Inicio',
        to: '/'
    }, {
        label: 'Cardapio',
        to: '/cardapio'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }];

    const navigate = useNavigate();

    return (
        <nav className={styles.menu}>
            <Logo onClick={()=> navigate('/')} className={styles.menu__logo}/>
            <ul className={styles.menu__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}