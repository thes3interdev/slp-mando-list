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

const Details = () => {
	return (
		<div className="p-3">
			<h1 className="pb-5 font-semibold text-2xl">Details</h1>
		</div>
	);
};

export default Details;
