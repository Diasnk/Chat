import Image from "next/image";
import Link from "next/link";
import { BiSolidGroup } from 'react-icons/bi'


export default function Header() {
	return (
		<div className="fixed top-0 left-0 right-0 z-10 bg-slate-500 lg:px-16 px-4 py-5 flex justify-between items-center">
			<div >
				<Link href="./guide">
					<h1 className="text-white font-semibold  hover:underline transition-all">Future Guide</h1>
				</Link>
			</div>
			<div className="flex items-center justify-center gap-5">
				<Link href="./" className="flex items-center font-semibold text-white  hover:underline transition-all">
					Main Page
				</Link>
				<Link href="./countries" className="flex items-center font-semibold text-white  hover:underline transition-all">
					Countries
				</Link>
				<div className="text-white hover:text-lg transition-all">
					<Link href="./register" className="flex items-center font-semibold text-white  hover:underline transition-all">
						<BiSolidGroup/>
					</Link>
				</div>
			</div>
		</div>
	);
}