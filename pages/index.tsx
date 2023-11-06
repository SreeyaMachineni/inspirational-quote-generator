import { GradientBackgroundCon } from '@/components/QuoteGenerator/QuoteGeneratorElements';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>inspirational quote genrator</title>
        <meta name='description' content='fun project' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <GradientBackgroundCon></GradientBackgroundCon>
      </main>
    </>
  );
}
