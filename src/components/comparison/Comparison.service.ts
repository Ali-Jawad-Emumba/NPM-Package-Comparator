import { ColumnType } from "antd/es/table";
import { ComparisonColumns } from "../../utils/types";

export const checkDateAge = (date: string): string => {
  const now = Date.now();
  const difference = now - new Date(date).getTime();

  if (difference > 5 * 365 * 24 * 60 * 60 * 1000)
    return "More than 5 years ago";
  if (difference > 365 * 24 * 60 * 60 * 1000) return "More than a year ago";
  if (difference > 30 * 24 * 60 * 60 * 1000) return "More than a month ago";
  if (difference > 7 * 24 * 60 * 60 * 1000) return "More than a week ago";
  return "Less than a week ago";
};

const getAuthorsPublishersForPackage = (packageData: any) => {
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

const getMaintainersForPackage = (packageData: any) => {
  const maintainers = packageData.maintainers;

  const maintainersArray = Array.isArray(maintainers)
    ? maintainers.map((val: any) => val.email)
    : [maintainers?.email];

  return maintainersArray.length > 0 ? maintainersArray : "N/A";
};
const checkForEmptyArray = (arrayToCheck: string | any[]) =>
  Array.isArray(arrayToCheck) && arrayToCheck.length > 0 ? arrayToCheck : "N/A";

export const getColumns = (
  metaDataFirstPackage: any,
  metaDataSecondPackage: any,
  renderCellsFn: any
): ColumnType[] => [
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
    render: (value: any[], record: any) =>
      renderCellsFn(record, value, "firstPackage"),
  },
  {
    title: metaDataSecondPackage.name,
    dataIndex: "package2",
    key: "3",
    width: "35%",
    align: "center",
    render: (value: any[], record: any) =>
      renderCellsFn(record, value, "secondPackage"),
  },
];
export const getTabelData = (
  metaDataFirstPackage: any,
  metaDataSecondPackage: any
): ComparisonColumns[] => [
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
