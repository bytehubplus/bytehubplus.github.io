import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '去中心化',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        用户平等、自由、灵活参与网络。使用SSI技术管理身份与资产，用户完全拥有身份与数字资产的控制权。
      </>
    ),
  },
  {
    title: '可携带',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        用户可以将自己的数据托管在其中任何一个节点。
      </>
    ),
  },
  {
    title: '灵活',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        模块化可编程按需部署，实现灵活的业务共识。
      </>
    ),
  },
  {
    title: '兼容',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        兼容区块链，方便接入区块链生态。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures(): JSX.Element {
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
