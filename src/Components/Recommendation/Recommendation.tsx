import { Card, Tag } from "antd";
import sparkels from "../../assets/sparkles emoji.png";
import styles from "./Recommendation.module.css";
import { CrownOutlined } from "@ant-design/icons";
import docIcon from "../../assets/documnetation icon.svg";
import infoIcon from "../../assets/info icon.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RecommendedPackage, State } from "../../utils/types";
import { compareBothPackages } from "./Recommendation.service";
import { formatCount } from "../../utils/utilities";

const Recommendation: React.FC = () => {
  const [recommendedPackage, setRecommendedPackage] =
    useState<RecommendedPackage>();
  const sparkleEmoji = <img className={styles.sparkles} src={sparkels} />;

  const firstPackageData = useSelector(
    (state: State) => state.firstPackageData
  );
  const secondPackageData = useSelector(
    (state: State) => state.secondPackageData
  );
  useEffect(() => {
    let recommended = compareBothPackages(firstPackageData, secondPackageData);
    setRecommendedPackage(recommended);
  }, [firstPackageData, secondPackageData]);

  return (
    <Card
      data-testid="recommendation-card"
      title={
        <div className={styles.cardTitle}>
          {sparkleEmoji}
          <p>
            {recommendedPackage?.name} is{" "}
            <span className={styles.timesBetter}>
              {formatCount(recommendedPackage?.timesBetter)}
            </span>{" "}
            times better
          </p>
          {sparkleEmoji}
        </div>
      }
      bordered={false}
      className="card"
    >
      <div
        data-testid="recommendation-section"
        className={styles.recommendedSection}
      >
        <div className={styles.packageDetailsText}>
          <div className={styles.rowFlex}>
            <CrownOutlined
              data-testid="crown-icon"
              className={styles.crownSymbol}
            />
            <h2
              data-testid="package-name"
              className={styles.recommendedPackageName}
            >
              {recommendedPackage?.name}
            </h2>
            <Tag data-testid="tags" className="tag" color="blue">
              recommended
            </Tag>
          </div>
          <p data-testid="description" className={styles.recommendedDetail}>
            {recommendedPackage?.description}
          </p>
          <div className={styles.packageTags}>
            {recommendedPackage?.keywords?.map((tag: string, index: number) => (
              <Tag data-testid="tags" key={index} className="tag">
                {tag}
              </Tag>
            ))}
          </div>
          <div className={styles.rowFlex}>
            <a
              className={styles.repoDocLinks}
              href={recommendedPackage?.repository}
              target="_blank"
              data-testid="links"
            >
              <img src={infoIcon} /> Repository
            </a>
            <a className={styles.repoDocLinks} data-testid="links">
              <img src={docIcon} /> Documentation
            </a>
          </div>
        </div>
        <div className={styles.packageDetailCounts}>
          <div data-testid="count">
            <p>Downloads</p>
            <h3>{formatCount(recommendedPackage?.downloadsCount)}</h3>
          </div>
          <div data-testid="count">
            <p>Stars</p>
            <h3>{formatCount(recommendedPackage?.starsCount)}</h3>
          </div>
          <div data-testid="count">
            <p>Health</p>
            <h3>{recommendedPackage?.health * 100}%</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Recommendation;
