import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
	}, []);

	return (
		<div className="text-center">
			<h1 className="pb-5 font-semibold text-3xl">Ooops...</h1>
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
