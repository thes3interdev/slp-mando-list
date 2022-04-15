import NavigationBar from '../components/NavigationBar';
import NavigationFooter from '../components/NavigationFooter';

const Layout = ({ children }) => {
	return (
		<div className="">
			<NavigationBar />
			{children}
			<NavigationFooter />
		</div>
	);
};

export default Layout;
