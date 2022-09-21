import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/front-page/easy.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Centré sur l\'essentiel',
    Svg: require('@site/static/img/front-page/focus.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Faible empreinte carbone',
    Svg: require('@site/static/img/front-page/eco.svg').default,
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    
    <div className={clsx('col col--4')}>
      <p></p>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

