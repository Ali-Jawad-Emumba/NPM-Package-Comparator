import { Button, Card, ConfigProvider, Table, TableProps, Tag } from "antd";
import { useSelector } from "react-redux";
import { State } from "../../state/slice";

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
      return <p style={{ textAlign: "left" }}>{value || "N/A"}</p>;
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
              href={
                record.name === "Repository"
                  ? useFor === "firstPackage"
                    ? firstPackageData.collected.metadata.links[val]
                    : secondPackageData.collected.metadata.links[val]
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
          {value.map((val, index) => (
            <Tag key={index} className="tag" color="gold">
              {val}
            </Tag>
          ))}
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
      title: firstPackageData.collected.metadata.name,
      dataIndex: "package1",
      key: "2",
      width: "35%",
      align: "center",
      render: (value: any[], record: { name: string }) =>
        renderCells(record, value, "firstPackage"),
    },
    {
      title: secondPackageData.collected.metadata.name,
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
      useFor === "firstPackageData" ? firstPackageData : secondPackageData;

    const getEmails = (data: any) => {
      return Array.isArray(data)
        ? data.map((val: any) => val.email)
        : data?.email;
    };

    const authorPublisher = [
      getEmails(packageData.collected.metadata.author),
      getEmails(packageData.collected.metadata.publisher),
    ];

    return authorPublisher.flat().length > 0 ? authorPublisher.flat() : "N/A";
  };

  const getMaintainersForPackage = (useFor: string) => {
    const packageData =
      useFor === "firstPackageData" ? firstPackageData : secondPackageData;

    const maintainers = Array.isArray(
      packageData.collected.metadata.maintainers
    )
      ? packageData.collected.metadata.maintainers.map((val: any) => val.email)
      : [packageData.collected.metadata.maintainers?.email];

    return maintainers.length > 0 ? maintainers : "N/A";
  };

  const checkForEmptyArray = (arrayToCheck: any[]) =>
    Array.isArray(arrayToCheck) && arrayToCheck.length > 0
      ? arrayToCheck
      : "N/A";

  const data: ComparisonColumns[] = [
    {
      key: "1",
      name: "Description",
      package1: firstPackageData.collected.metadata.description,
      package2: secondPackageData.collected.metadata.description,
    },
    {
      key: "2",
      name: "Keywords",
      package1: checkForEmptyArray(
        firstPackageData.collected.metadata.keywords
      ),
      package2: checkForEmptyArray(
        secondPackageData.collected.metadata.keywords
      ),
    },
    {
      key: "3",
      name: "Repository",
      package1: checkForEmptyArray(
        Object.keys(firstPackageData.collected.metadata.links)
      ),
      package2: checkForEmptyArray(
        Object.keys(secondPackageData.collected.metadata.links)
      ),
    },
    {
      key: "4",
      name: "License",
      package1: Array.isArray(firstPackageData.collected.metadata.license)
        ? firstPackageData.collected.metadata.license
        : [firstPackageData.collected.metadata.license],
      package2: Array.isArray(secondPackageData.collected.metadata.license)
        ? secondPackageData.collected.metadata.license
        : [secondPackageData.collected.metadata.license],
    },
    {
      key: "5",
      name: "Last Modification Date",
      package1: [firstPackageData.collected.metadata.date],
      package2: [secondPackageData.collected.metadata.date],
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
      <ConfigProvider theme={{ token: { borderRadius: 2 } }}>
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
