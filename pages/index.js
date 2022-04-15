import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui tempora nam
				exercitationem facere aspernatur eveniet ipsam nihil eos! Veritatis rerum
				voluptatum ab. In fugiat maxime ut, iusto dolores laborum voluptates nemo.
				Voluptate, dolores!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugiat iusto impedit
				aperiam, alias nobis beatae, est debitis animi cumque nam.
			</p>
			<Link href="/mandos">
				<a>See Mando Listing</a>
			</Link>
		</div>
	);
};

export default Home;
