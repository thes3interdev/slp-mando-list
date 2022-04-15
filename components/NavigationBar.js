import Link from 'next/link';

const NavigationBar = () => {
	return (
		<nav>
			<div>
				<h1>Mando List</h1>
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/mandos">
				<a>Mando Listing</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
		</nav>
	);
};

export default NavigationBar;
