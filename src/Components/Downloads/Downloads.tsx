import { Card } from "antd";
import { Line } from "@ant-design/plots";
import styles from './Downloads.module.css'

export default function Downloads() {
  const data = [
        { date: "1991-01-15", downloads: 8, package: "Package A" },
        { date: "1991-02-10", downloads: 10, package: "Package B" },
        { date: "1992-03-05", downloads: 12, package: "Package A" },
        { date: "1992-04-20", downloads: 16, package: "Package B" },
        { date: "1993-02-15", downloads: 15.5, package: "Package A" },
        { date: "1993-05-10", downloads: 23.5, package: "Package B" },
        { date: "1994-01-25", downloads: 20, package: "Package A" },
        { date: "1994-03-14", downloads: 28, package: "Package B" },
        { date: "1995-06-05", downloads: 24.9, package: "Package A" },
        { date: "1995-07-15", downloads: 33.9, package: "Package B" },
        { date: "1996-01-10", downloads: 30.9, package: "Package A" },
        { date: "1996-04-12", downloads: 43.9, package: "Package B" },
        { date: "1997-03-17", downloads: 37.9, package: "Package A" },
        { date: "1997-08-25", downloads: 54.9, package: "Package B" },
        { date: "1998-01-30", downloads: 46.9, package: "Package A" },
        { date: "1998-02-18", downloads: 67.9, package: "Package B" },
        { date: "1999-05-10", downloads: 59.9, package: "Package A" },
        { date: "1999-09-02", downloads: 82.9, package: "Package B" }
      
  ];

  const config = {
    data,
    xField: "date",
    yField: "downloads",
    legend: {
      marker: "circle",
    },
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
}
