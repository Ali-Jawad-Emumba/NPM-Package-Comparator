import { Button, Card, ConfigProvider, Table, TableProps, Tag } from "antd";
import { useSelector } from "react-redux";
import { State } from "../../state/slice";
import styles from './Comparison.module.css'

interface ComparisonColumns {
  key?: string;
  name: string;
  package1: string | string[];
  package2: string | string[];
}
const Comparison = () => {
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
          {value.map((val, index) => { if (val) return<Tag key={index} className="tag" color="gold">
              {val}
            </Tag>
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
  const checkDateAge = (date: string): string => {
    const now = Date.now();
    const difference = now - new Date(date).getTime();

    if (difference > 5 * 365 * 24 * 60 * 60 * 1000)
      return "More than 5 years ago";
    if (difference > 365 * 24 * 60 * 60 * 1000) return "More than a year ago";
    if (difference > 30 * 24 * 60 * 60 * 1000) return "More than a month ago";
    if (difference > 7 * 24 * 60 * 60 * 1000) return "More than a week ago";
    return "Less than a week ago";
  };

  const getAuthorsPublishersForPackage = (useFor: string) => {
    const packageData =
      useFor === "firstPackageData"
        ? metaDataFirstPackage
        : metaDataSecondPackage;

    const getEmails = (data: any) => {
      return Array.isArray(data)
        ? data.map((val: any) => val.email)
        : data?.email;
    };

    const authorPublisher = [
      getEmails(packageData.author),
      getEmails(packageData.publisher),
    ];

    return authorPublisher.flat().length > 0 ? authorPublisher.flat() : "N/A";
  };

  const getMaintainersForPackage = (useFor: string) => {
    const maintainers =
      useFor === "firstPackageData"
        ? metaDataFirstPackage.maintainers
        : metaDataSecondPackage.maintainers;

    const maintainersArray = Array.isArray(maintainers)
      ? maintainers.map((val: any) => val.email)
      : [maintainers?.email];

    return maintainersArray.length > 0 ? maintainersArray : "N/A";
  };

  const checkForEmptyArray = (arrayToCheck: any[]) =>
    Array.isArray(arrayToCheck) && arrayToCheck.length > 0
      ? arrayToCheck
      : "N/A";

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
      package1: getAuthorsPublishersForPackage("firstPackageData"),
      package2: getAuthorsPublishersForPackage("secondPackageData"),
    },
    {
      key: "7",
      name: "Maintainers",
      package1: getMaintainersForPackage("firstPackageData"),
      package2: getMaintainersForPackage("secondPackageData"),
    },
  ];

  return (
    <Card title="Comparison" bordered={false} className="card">
      <ConfigProvider theme={{ token: { borderRadius: 2, fontFamily:'Roboto-Regular', fontSize:14 } }}>
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
