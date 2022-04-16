export const getStaticProps = async () => {
	const res = await fetch('http://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { mandos: data },
	};
};

const Mandos = ({ mandos }) => {
	return (
		<div className="p-3">
			<h1 className="pb-5 font-semibold text-2xl">All Mandalorians</h1>
			{mandos.map((mando) => (
				<div key={mando.id}>
					<a className="py-[10px] px-4 bg-white block my-5 mx-[10px] border-l-8 hover:border-l-sky-800">
						<h3>{mando.name}</h3>
					</a>
				</div>
			))}
		</div>
	);
};

export default Mandos;
