import { Card, Tag } from "antd";
import sparkels from "../../assets/sparkles emoji.png";
import styles from "./Recommendation.module.css";
import { CrownOutlined } from "@ant-design/icons";
import docIcon from "../../assets/documnetation icon.svg";
import infoIcon from "../../assets/info icon.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RecommendedPackage, ScoreData, State } from "../../utils/types";

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
  useEffect(() => compareBothPackages(), [firstPackageData, secondPackageData]);

  const compareBothPackages = () => {
    const evalutaionFirstPackage = firstPackageData.evaluation;
    const evaluationSecondPackage = secondPackageData.evaluation;

    const getScores = (data: ScoreData) => ({
      communityInterest: (data?.popularity.communityInterest / 100) * 30,
      downloads: data?.popularity.downloadsCount / 2,
      testsAndCarefulness:
        ((data?.quality.tests + data?.quality.carefulness) / 100) * 30,
    });
    const firstPackageScores = getScores(evalutaionFirstPackage);
    const secondPackageScores = getScores(evaluationSecondPackage);
    const totalScoreFirstPackage = Object.values(firstPackageScores).reduce(
      (sum, score) => (sum += score),
      0
    );
    const totalScoreSecondPackage = Object.values(secondPackageScores).reduce(
      (sum, score) => (sum += score),
      0
    );

    const betterPackage =
      totalScoreFirstPackage > totalScoreSecondPackage
        ? firstPackageData
        : secondPackageData;
    const differenceInScore =
      totalScoreFirstPackage > totalScoreSecondPackage
        ? totalScoreFirstPackage - totalScoreSecondPackage
        : totalScoreSecondPackage - totalScoreFirstPackage;
    const timesBetter =
      totalScoreFirstPackage > totalScoreSecondPackage
        ? differenceInScore / totalScoreSecondPackage
        : differenceInScore / totalScoreFirstPackage;

    const data = {
      name: betterPackage.collected.metadata.name,
      description: betterPackage.collected.metadata.description,
      keywords: betterPackage.collected.metadata.keywords,
      repository: betterPackage.collected.metadata.links.repository,
      downloadsCount: betterPackage.evaluation?.popularity.downloadsCount,
      starsCount: betterPackage.collected.npm?.starsCount,
      health: betterPackage.evaluation?.quality.health,
      timesBetter: timesBetter,
    };

    setRecommendedPackage(data);
  };

  const formatCount = (val: number) => {
    const formatWithSuffix = (divisor: number, suffix: string) =>
      `${Math.round(val / divisor)}${suffix}${val > divisor ? "+" : ""}`;

    if (val >= 1000000000) {
      return formatWithSuffix(1000000000, "B");
    } else if (val >= 1000000) {
      return formatWithSuffix(1000000, "M");
    } else if (val >= 1000) {
      return formatWithSuffix(1000, "K");
    } else if (val % 1 !== 0) return val?.toFixed(2);
    else {
      return val;
    }
  };

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
