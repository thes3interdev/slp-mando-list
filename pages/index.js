import Link from 'next/link';
import Meta from '../utilities/Meta';

const Home = () => {
	return (
		<div>
			<Meta title="Home | Mando Lists | Superior Software Solutions" />
			<h1 className="pb-5 font-semibold text-2xl">Home</h1>
			<div className="leading-relaxed">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui tempora nam
					exercitationem facere aspernatur eveniet ipsam nihil eos! Veritatis rerum
					voluptatum ab. In fugiat maxime ut, iusto dolores laborum voluptates nemo.
					Voluptate, dolores!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fugiat iusto
					impedit aperiam, alias nobis beatae, est debitis animi cumque nam.
				</p>
			</div>
			<Link href="/mandos">
				<a className="block w-[150px] py-2 my-5 mx-auto bg-sky-800 text-white text-center rounded">
					See Mando Listing
				</a>
			</Link>
		</div>
	);
};

export default Home;
