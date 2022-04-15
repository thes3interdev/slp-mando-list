import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="text-center">
			<h1 className="pb-5 font-semibold text-2xl">Ooops...</h1>
			<h2 className="pb-5 font-semibold text-xl">That page cannot be found.</h2>
			<p>
				Return to the{' '}
				<Link href="/">
					<a className="text-sky-700 underline">Homepage</a>
				</Link>
			</p>
		</div>
	);
};

export default NotFound;
