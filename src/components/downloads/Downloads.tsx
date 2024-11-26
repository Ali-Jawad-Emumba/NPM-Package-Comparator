import { Card } from "antd";
import { Line } from "@ant-design/plots";
import styles from "./Downloads.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {DownloadData, State } from "../../utils/types";
import { prepareDataForDownloads } from "./Downloads.service";

const Downloads: React.FC = () => {
  const [downloadsData, setDownloadsData] = useState<DownloadData[]>([]);
  const firstPackageData = useSelector(
    (state: State) => state.firstPackageData
  );
  const secondPackageData = useSelector(
    (state: State) => state.secondPackageData
  );
  const config = {
    data: downloadsData,
    xField: "date",
    yField: "downloads",
    colorField: "package",
    style: {
      lineWidth: 2,
    },
  };

  useEffect(() => {
    let combinedData = prepareDataForDownloads(firstPackageData.collected, secondPackageData.collected);
    setDownloadsData(combinedData);
  }, [firstPackageData, secondPackageData]);

  

  return (
    <Card title="Downloads" bordered={false} className="card">
      <Line {...config} className={styles.lineChart} />
    </Card>
  );
};

export default Downloads;
