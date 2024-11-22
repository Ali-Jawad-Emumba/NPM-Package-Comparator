import { Card } from "antd";
import { Line } from "@ant-design/plots";
import styles from "./Downloads.module.css";
import { useSelector } from "react-redux";
import { State } from "../../state/slice";
import { useEffect, useState } from "react";

interface DownloadData {
  date: string;
  downloads: number;
  package: string;
}
interface DateOfDownload {
  from: string;
  to: string;
  count: number;
}
const Downloads = () => {
  const [downloadsData, setDownloadsData] = useState<DownloadData[]>([]);
  const firstPackageData = useSelector(
    (state: State) => state.firstPackageData
  );
  const secondPackageData = useSelector(
    (state: State) => state.secondPackageData
  );

  const prepareDataForDownloads = () => {
    const convertToDate = (val: string | number | Date) =>
      new Date(val).toLocaleDateString();
    const dataFirstPackage = firstPackageData.collected;
    const dataSecondPackage = secondPackageData.collected;

    const getPreparedData = (packageData: any) =>
      packageData.npm?.downloads.map((data: DateOfDownload) => ({
        date: `${convertToDate(data.from)}-${convertToDate(data.to)}`,
        downloads: data.count,
        package: packageData.metadata.name,
      }));
    const preparedDataFirstPackage = getPreparedData(dataFirstPackage);
    const preparedDataSecondPackage = getPreparedData(dataSecondPackage);
    const combinedData = [
      ...preparedDataFirstPackage||[],
      ...preparedDataSecondPackage||[],
    ];
    combinedData.sort((a, b) => {
      const dateA = new Date(a.date.split("-")[0]); // Get the first date from 'from-to' format
      const dateB = new Date(b.date.split("-")[0]); // Get the first date from 'from-to' format
      return dateA.getTime() - dateB.getTime(); // Sort in ascending order (oldest first)
    });
    setDownloadsData(combinedData);
  };

  useEffect(() => {
    prepareDataForDownloads();
  }, [firstPackageData, secondPackageData]);

  const config = {
    data: downloadsData,
    xField: "date",
    yField: "downloads",
    colorField: "package",
    style: {
      lineWidth: 2,
    },
  };
  return (
    <Card title="Downloads" bordered={false} className="card">
      <Line {...config} className={styles.lineChart} />
    </Card>
  );
};
export default Downloads;
