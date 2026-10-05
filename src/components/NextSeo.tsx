import Head from "next/head";
import { generateNextSeo, type NextSeoProps } from "next-seo/pages";

export default function NextSeo(props: NextSeoProps) {
	return <Head>{generateNextSeo(props)}</Head>;
}
