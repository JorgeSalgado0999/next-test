import React, {FC} from "react";

interface PageProps {
	params: {
		id: string;
	};
}

const Page: FC<PageProps> = ({params}) => {
	return (
		<div>
			<h1>Seller: {params.id}</h1>
			<h5>testing</h5>
		</div>
	);
};

export default Page;
