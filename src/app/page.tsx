import { Header } from './components';
import { Quiz } from './features';

export default function Home() {
	return (
		<div>
			<div className="container">
				<Header />
				<Quiz />
			</div>
		</div>
	);
}
