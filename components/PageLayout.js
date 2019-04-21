import Head from 'next/head';

const PageLayout = props => (
  <div id="main">
    {props.children}
    <Head>
      <title>Github Client</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <meta name="charset" content="utf-8" key="charset" />
    </Head>
  </div>
);

export default PageLayout;
