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

export const getAuthorsPublishersForPackage = (packageData: any) => {
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

export const getMaintainersForPackage = ( packageData: any ) => {
  const maintainers = packageData.maintainers

  const maintainersArray = Array.isArray(maintainers)
    ? maintainers.map((val: any) => val.email)
    : [maintainers?.email];

  return maintainersArray.length > 0 ? maintainersArray : "N/A";
};

export const checkForEmptyArray = (arrayToCheck: string | any[]) =>
  Array.isArray(arrayToCheck) && arrayToCheck.length > 0 ? arrayToCheck : "N/A";

