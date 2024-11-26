import { DateOfDownload } from "../../utils/types";

export const prepareDataForDownloads = (
    dataFirstPackage: any,
    dataSecondPackage: any
) => {
  const convertToDate = (val: string | number | Date) =>
    new Date(val).toLocaleDateString();
  const getPreparedData = (packageData: any) =>
    packageData.npm?.downloads.map((data: DateOfDownload) => ({
      date: `${convertToDate(data.from)}`,
      downloads: data.count,
      package: packageData.metadata.name,
    }));
  const preparedDataFirstPackage = getPreparedData(dataFirstPackage);
  const preparedDataSecondPackage = getPreparedData(dataSecondPackage);
  const combinedData = [
    ...(preparedDataFirstPackage || []),
    ...(preparedDataSecondPackage || []),
  ];
  combinedData.sort((a, b) => {
    const dateA = new Date(a.date.split("-")[0]); // Get the first date from 'from-to' format
    const dateB = new Date(b.date.split("-")[0]); // Get the first date from 'from-to' format
    return dateA.getTime() - dateB.getTime(); // Sort in ascending order (oldest first)
  });
  return combinedData;
};
