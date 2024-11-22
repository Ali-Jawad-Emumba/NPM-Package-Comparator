import { Card, Tag } from "antd";
import sparkels from "../../assets/sparkles emoji.png";
import styles from "./Recommendation.module.css";
import { CrownOutlined } from "@ant-design/icons";
import docIcon from "../../assets/documnetation icon.svg";
import infoIcon from "../../assets/info icon.svg";
import { useSelector } from "react-redux";
import { State } from "../../state/slice";
import { useEffect, useState } from "react";

interface RecommendedPackage {
  name: any;
  description: any;
  keywords: any;
  repository: any;
  downloadsCount: any;
  starsCount: any;
  health: any;
  timesBetter: any;
}
const Recommendation = () => {
  const [recommendedPackage, setRecommendedPackage] =
    useState<RecommendedPackage>();
  const sparkleEmoji = <img className={styles.sparkles} src={sparkels} />;

  const firstPackageData = useSelector(
    (state: State) => state.firstPackageData
  );
  const secondPackageData = useSelector(
    (state: State) => state.secondPackageData
  );
  const compareBothPackages = () => {
    const evalutaionFirstPackage = firstPackageData.evaluation;
    const evaluationSecondPackage = secondPackageData.evaluation;

    const getScores = (data: any) => ({
      communityInterest: (data.popularity.communityInterest / 100) * 30,
      downloads: data.popularity.downloadsCount / 2,
      testsAndCarefulness:
        ((data.quality.tests + data.quality.carefulness) / 100) * 30,
    });
    const firstPackageScores = getScores(evalutaionFirstPackage);
    const secondPackageScores = getScores(evaluationSecondPackage);
    const totalScoreFirstPackage = Object.values(firstPackageScores).reduce(
      (sum, score) => (sum += score),
      0
    );
    console.log(Object.values(firstPackageScores));
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

    console.log(totalScoreFirstPackage, totalScoreSecondPackage);
    const data = {
      name: betterPackage.collected.metadata.name,
      description: betterPackage.collected.metadata.description,
      keywords: betterPackage.collected.metadata.keywords,
      repository: betterPackage.collected.metadata.links.repository,
      downloadsCount: betterPackage.evaluation.popularity.downloadsCount,
      starsCount: betterPackage.collected.npm.starsCount,
      health: betterPackage.evaluation.quality.health,
      timesBetter: timesBetter,
    };

    setRecommendedPackage(data);
  };

  const formatCount = (val: number): string => {
    if (val < 1) return val.toFixed(2);
    const formatWithSuffix = (divisor: number, suffix: string) =>
      `${Math.round(val / divisor)}${suffix}${val > divisor ? "+" : ""}`;

    if (val >= 1000000000) return formatWithSuffix(1000000000, "B");
    if (val >= 1000000) return formatWithSuffix(1000000, "M");
    if (val >= 1000) return formatWithSuffix(1000, "K");

    return val.toString();
  };

  useEffect(() => compareBothPackages(), [firstPackageData, secondPackageData]);
  return (
    <Card
      title={
        <div className={styles.cardTitle}>
          {sparkleEmoji}
          <p>
            {recommendedPackage?.name} is{" "}
            {formatCount(recommendedPackage?.timesBetter)} times better
          </p>
          {sparkleEmoji}
        </div>
      }
      bordered={false}
      className="card"
    >
      <div className={styles.recommendedSection}>
        <div className={styles.packageDetailsText}>
          <div className={styles.rowFlex}>
            <CrownOutlined style={{ fontSize: "14.5px" }} />
            <h2 style={{ margin: 0 }}>{recommendedPackage?.name}</h2>
            <Tag className="tag" color="blue">
              recommended
            </Tag>
          </div>
          <p style={{ margin: 0 }}>{recommendedPackage?.description}</p>
          <div className={styles.packageTags}>
            {recommendedPackage?.keywords?.map((tag: string, index: number) => (
              <Tag key={index} className="tag">
                {tag}
              </Tag>
            ))}
          </div>
          <div className={styles.rowFlex}>
            <a
              className={styles.rowFlex}
              href={recommendedPackage?.repository}
              target="_blank"
            >
              <img src={infoIcon} /> Repository
            </a>
            <a className={styles.rowFlex}>
              <img src={docIcon} /> Documentation
            </a>
          </div>
        </div>
        <div className={styles.packageDetailCounts}>
          <div>
            <p>Downloads</p>
            <h3>{formatCount(recommendedPackage?.downloadsCount)}</h3>
          </div>
          <div>
            <p>Stars</p>
            <h3>{formatCount(recommendedPackage?.starsCount)}</h3>
          </div>
          <div>
            <p>Health</p>
            <h3>{recommendedPackage?.health * 100}%</h3>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Recommendation;
