import Head from 'next/head';

const Meta = ({ title }) => {
	return (
		<div>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content="mandalorian, mandalorians, mando, mando list" />
				<meta
					name="description"
					content="The definitive list of all mandalorians in the galaxy."
				/>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<title>{title}</title>
			</Head>
		</div>
	);
};

Meta.defaultProps = {
	title: 'Mando Lists | Superior Software Solutions',
};

export default Meta;
