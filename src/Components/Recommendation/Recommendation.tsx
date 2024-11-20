import { Card, Tag } from "antd";
import sparkels from "../../assets/sparkles emoji.png";
import styles from "./Recommendation.module.css";
import { CrownOutlined } from "@ant-design/icons";
import docIcon from "../../assets/documnetation icon.svg";
import infoIcon from "../../assets/info icon.svg";

export default function Recommendation() {
  const sparkleEmoji = <img className={styles.sparkles} src={sparkels} />;
  const cardTitle = (
    <div className={styles.cardTitle}>
      {sparkleEmoji}
      <p>Package Name</p>
      {sparkleEmoji}
    </div>
  );
  const detailTags: string[] = ["Typesecript", "JavaScript"];
  return (
    <Card title={cardTitle} bordered={false} className="card">
      <div className={styles.recommendedSection}>
        <div className={styles.packageDetailsText}>
          <div className={styles.rowFlex}>
            <CrownOutlined style={{ fontSize: "14.5px" }} />
            <h2 style={{ margin: 0 }}>package name</h2>
            <Tag className="tag" color="blue">
              recommended
            </Tag>
          </div>
          <p style={{ margin: 0 }}>
            Hooks for managing, caching, and syncing asynchronous and remote
            data in React. For more information visit our repository.
          </p>
          <div className={styles.rowFlex}>
            {detailTags.map((tag, index) => (
              <Tag key={index} className="tag">
                {tag}
              </Tag>
            ))}
          </div>
          <div className={styles.rowFlex}>
            <div className={styles.rowFlex}>
              <img src={infoIcon} /> Repository
            </div>
            <div className={styles.rowFlex}>
              <img src={docIcon} /> Documentation
            </div>
          </div>
        </div>
        <div className={styles.packageDetailCounts}>
          <div>
            <p>Downloads</p>
            <h3>512K+</h3>
          </div>
          <div>
            <p>Stars</p>
            <h3>24.7K+</h3>
          </div>
          <div>
            <p>Health</p>
            <h3>75%</h3>
          </div>
        </div>
      </div>
    </Card>
  );
}
