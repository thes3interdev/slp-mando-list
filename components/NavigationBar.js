import Link from 'next/link';

const NavigationBar = () => {
	return (
		<nav className="mt-[10px] mx-auto mb-20 py-[10px] flex justify-between border-b border-slate-300">
			<div className="mr-auto">
				<h1>Mando List</h1>
			</div>
			<div className="space-x-3">
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/mandos">
					<a>Mando Listing</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
			</div>
		</nav>
	);
};

export default NavigationBar;
