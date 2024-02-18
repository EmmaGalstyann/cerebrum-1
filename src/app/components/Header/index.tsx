import Logo from '../../assets/icons/logo.svg';
import styles from './style.module.scss';

export const Header = () => {
	return (
		<nav className={`f justify-center align-center ${styles.header}`}>
			<Logo />
			{/* <Image src={Logo} width={175} height={25} alt="Cerebrum IQ" /> */}
		</nav>
	);
};
