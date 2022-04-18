import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="9. Juli 2022">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="purple-text">Save the Date!</h1>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <h2 className="hero__subtitle">{siteConfig.tagline}</h2>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Was geht ab?
            </Link>&nbsp;&nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://paypal.com'}>
               Ick bin dabei!
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="container-responsive">
          <iframe className="responsive-iframe"
                  src="https://www.youtube.com/embed/A7ZxRs45tTg?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=A7ZxRs45tTg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
          </iframe>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
