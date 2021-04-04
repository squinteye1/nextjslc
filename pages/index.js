import Head from "next/head";
import styles from "../styles/Home.module.css";
import Container from "@/components/container";
import { fetchAPI } from "@lib/api";

export default function Home(articles, categories, homepage) {
  return (
    <Container categories={categories}>
      <div>TITLE</div>
    </Container>
  );
}

export async function getStaticProps() {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);
  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}
