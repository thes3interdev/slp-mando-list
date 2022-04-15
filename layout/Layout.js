import Meta from '../utilities/Meta';
import NavigationBar from '../components/NavigationBar';
import NavigationFooter from '../components/NavigationFooter';

const Layout = ({ children }) => {
	return (
		<div className="max-w-[960px] mx-auto">
			<Meta />
			<NavigationBar />
			{children}
			<NavigationFooter />
		</div>
	);
};

export default Layout;
