import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '心理諮詢',
    description: (
      <>
        提供心理諮詢服務，幫助跨性別者處理與性別認同相關的情緒和心理挑戰。
      </>
    ),
  },
  {
    title: '出櫃支持',
    description: (
      <>
        協助跨性別者向他們的父母、朋友、同學或老師出櫃，提供指導和支持，幫助他們順利表達自己的身份。
      </>
    ),
  },
  {
    title: '家長勸導',
    description: (
      <>
        為家長提供諮詢和教育，幫助他們理解跨性別者的需求與挑戰，增強家庭支持。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
