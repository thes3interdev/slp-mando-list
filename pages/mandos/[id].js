export const getStaticPaths = async () => {
	const res = await fetch('http://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	const paths = data.map((mando) => {
		return {
			params: { id: mando.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
	const data = await res.json();

	return {
		props: { mando: data },
	};
};

const Details = ({ mando }) => {
	return (
		<div className="p-3">
			<h1 className="pb-5 font-semibold text-2xl">{mando.name}</h1>
			<div className="space-y-3">
				<p>
					<span className="font-bold">Email Address: </span>
					{mando.email}
				</p>
				<p>
					<span className="font-bold">Website: </span>
					{mando.website}
				</p>
				<p>
					<span className="font-bold">City of Residence: </span>
					{mando.address.city}
				</p>
				<p>
					<span className="font-bold">Employer: </span>
					{mando.company.name}
				</p>
			</div>
		</div>
	);
};

export default Details;
