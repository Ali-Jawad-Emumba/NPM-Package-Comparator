import { Button, Card, ConfigProvider, Table, TableProps, Tag } from "antd";
import { useSelector } from "react-redux";
import styles from "./Comparison.module.css";
import { ComparisonColumns, State } from "../../utils/types";
import {
  checkDateAge,
  checkForEmptyArray,
  getAuthorsPublishersForPackage,
  getMaintainersForPackage,
} from "./Comparison.service";

const Comparison: React.FC = () => {
  const firstPackageData = useSelector(
    (state: State) => state.firstPackageData
  );
  const secondPackageData = useSelector(
    (state: State) => state.secondPackageData
  );
  const metaDataFirstPackage = firstPackageData.collected.metadata;
  const metaDataSecondPackage = secondPackageData.collected.metadata;
  const renderCells = (
    record: { name: string },
    value: string[],
    useFor: string
  ) => {
    if (record.name === "Keywords" && Array.isArray(value)) {
      return (
        <>
          {value.map((val, index) => (
            <Tag key={index} className="tag">
              {val}
            </Tag>
          ))}
        </>
      );
    }
    if (record.name === "Description") {
      return <p className={styles.descriptionRecord}>{value || "N/A"}</p>;
    }
    if (
      (record.name === "Repository" ||
        record.name === "Authors/Publishers" ||
        record.name === "Maintainers") &&
      Array.isArray(value)
    ) {
      return (
        <>
          {value.map((val, index) => (
            <Button
              key={index}
              type="link"
              className={styles.comparisonLinks}
              href={
                record.name === "Repository"
                  ? useFor === "firstPackage"
                    ? metaDataFirstPackage.links[val]
                    : metaDataSecondPackage.links[val]
                  : `mailto: ${val}`
              }
              target="_blank"
            >
              {val}
            </Button>
          ))}
        </>
      );
    }
    if (record.name === "License" && Array.isArray(value)) {
      return (
        <>
          {value.map((val, index) => {
            if (val)
              return (
                <Tag key={index} className="tag" color="gold">
                  {val}
                </Tag>
              );
          })}
        </>
      );
    }
    if (record.name === "Last Modification Date") {
      return checkDateAge(value[0]) || "N/A";
    }
    return value;
  };
  const columns: TableProps<ComparisonColumns>["columns"] = [
    {
      title: "Package Name",
      dataIndex: "name",
      key: "1",
      rowScope: "row",
      width: "25%",
    },
    {
      title: metaDataFirstPackage.name,
      dataIndex: "package1",
      key: "2",
      width: "35%",
      align: "center",
      render: (value: any[], record: { name: string }) =>
        renderCells(record, value, "firstPackage"),
    },
    {
      title: metaDataSecondPackage.name,
      dataIndex: "package2",
      key: "3",
      width: "35%",
      align: "center",
      render: (value: any[], record: { name: string }) =>
        renderCells(record, value, "secondPackage"),
    },
  ];
  const data: ComparisonColumns[] = [
    {
      key: "1",
      name: "Description",
      package1: metaDataFirstPackage.description,
      package2: metaDataSecondPackage.description,
    },
    {
      key: "2",
      name: "Keywords",
      package1: checkForEmptyArray(metaDataFirstPackage.keywords),
      package2: checkForEmptyArray(metaDataSecondPackage.keywords),
    },
    {
      key: "3",
      name: "Repository",
      package1: checkForEmptyArray(Object.keys(metaDataFirstPackage.links)),
      package2: checkForEmptyArray(Object.keys(metaDataSecondPackage.links)),
    },
    {
      key: "4",
      name: "License",
      package1: Array.isArray(metaDataFirstPackage.license)
        ? metaDataFirstPackage.license
        : [metaDataFirstPackage.license],
      package2: Array.isArray(metaDataSecondPackage.license)
        ? metaDataSecondPackage.license
        : [metaDataSecondPackage.license],
    },
    {
      key: "5",
      name: "Last Modification Date",
      package1: [metaDataFirstPackage.date],
      package2: [metaDataSecondPackage.date],
    },
    {
      key: "6",
      name: "Authors/Publishers",
      package1: getAuthorsPublishersForPackage(metaDataFirstPackage),
      package2: getAuthorsPublishersForPackage(metaDataSecondPackage),
    },
    {
      key: "7",
      name: "Maintainers",
      package1: getMaintainersForPackage(metaDataFirstPackage),
      package2: getMaintainersForPackage(metaDataSecondPackage),
    },
  ];

  return (
    <Card title="Comparison" bordered={false} className="card">
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          tableLayout="fixed"
          rowKey="key"
        />
      </ConfigProvider>
    </Card>
  );
};

export default Comparison;
