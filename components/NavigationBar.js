import Link from 'next/link';
import Image from 'next/image';

const NavigationBar = () => {
	return (
		<nav className="mt-[10px] mx-auto mb-20 py-[10px] flex justify-between border-b border-slate-300">
			<div className="mr-auto">
				<Image src="/logo.png" width={90} height={90} alt="Logo" />
			</div>
			<div className="grid grid-cols-3 content-end justify-items-center">
				<Link href="/">
					<a className="">Home</a>
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
