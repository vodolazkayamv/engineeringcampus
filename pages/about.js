import Head from 'next/head';
import content from './my.content.json';

export default function Index() {
  return (
      <>
        <Head>
          <title>{content.title}</title>
        </Head>
        <h1>{content.title}</h1>
        <div>{content.content}</div>
      </>
  );
}