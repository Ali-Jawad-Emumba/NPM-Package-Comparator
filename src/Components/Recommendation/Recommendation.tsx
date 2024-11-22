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
  betterPackage: any;
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
    const firstPackageScores = {
      communityInterest:
        (firstPackageData.evaluation.popularity.communityInterest / 100) * 30,
      downloads: firstPackageData.evaluation.popularity.downloadsCount / 2,
      testsAndCarefulness:
        ((firstPackageData.evaluation.quality.tests +
          firstPackageData.evaluation.quality.carefulness) /
          100) *
        30,
    };
    const secondPackageScores = {
      communityInterest:
        (secondPackageData.evaluation.popularity.communityInterest / 100) * 30,
      downloads: secondPackageData.evaluation.popularity.downloadsCount / 2,
      testsAndCarefulness:
        ((secondPackageData.evaluation.quality.tests +
          secondPackageData.evaluation.quality.carefulness) /
          100) *
        30,
    };
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
    setRecommendedPackage({
      betterPackage: betterPackage,
      timesBetter: timesBetter,
    });
  };

  const formatCount = (val: number) => {
    if (val >= 1_000_000_000) {
      return `${Math.round(val / 1_000_000_000)}B${
        val > 1_000_000_000 ? "+" : ""
      }`;
    } else if (val >= 1_000_000) {
      return `${Math.round(val / 1_000_000)}M${val > 1_000_000 ? "+" : ""}`;
    } else if (val >= 1000) {
      return `${Math.round(val / 1000)}K${val > 1000 ? "+" : ""}`;
    } else {
      return val;
    }
  };

  useEffect(() => compareBothPackages(), [firstPackageData, secondPackageData]);
  return (
    <Card
      title={
        <div className={styles.cardTitle}>
          {sparkleEmoji}
          <p>
            {recommendedPackage?.betterPackage.collected.metadata.name} is{" "}
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
            <h2 style={{ margin: 0 }}>
              {recommendedPackage?.betterPackage.collected.metadata.name}
            </h2>
            <Tag className="tag" color="blue">
              recommended
            </Tag>
          </div>
          <p style={{ margin: 0 }}>
            {recommendedPackage?.betterPackage.collected.metadata.description}
          </p>
          <div className={styles.packageTags}>
            {recommendedPackage?.betterPackage.collected.metadata.keywords.map(
              (tag: string, index: number) => (
                <Tag key={index} className="tag">
                  {tag}
                </Tag>
              )
            )}
          </div>
          <div className={styles.rowFlex}>
            <a
              className={styles.rowFlex}
              href={
                recommendedPackage?.betterPackage.collected.metadata.links
                  .repository
              }
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
            <h3>
              {formatCount(
                recommendedPackage?.betterPackage.evaluation.popularity
                  .downloadsCount
              )}
            </h3>
          </div>
          <div>
            <p>Stars</p>
            <h3>
              {formatCount(
                recommendedPackage?.betterPackage.collected.npm.starsCount
              )}
            </h3>
          </div>
          <div>
            <p>Health</p>
            <h3>
              {recommendedPackage?.betterPackage.evaluation.quality.health *
                100}
              %
            </h3>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default Recommendation;
