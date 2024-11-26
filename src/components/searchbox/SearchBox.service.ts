export const fetchPackages = async (value: string) => {
  const fetchFn = await fetch(`https://api.npms.io/v2/search?q=${value}`);
  const response = await fetchFn.json();
  return response.results;
};

export const fetchSelectedPackgesDetails = async (
  packageName: string,
  api: any,
  icon: any
) => {
  try {
    const encodedVal = encodeURIComponent(packageName).replace(/%40/g, "@");
    const fetchFn = await fetch(`https://api.npms.io/v2/package/${encodedVal}`);
    const response = await fetchFn.json();
    return response;
  } catch (error) {
    showError(api, `Failed to fetch data for package: ${packageName}.`, icon);
  }
};
export const showError = (api: any, description: string, icon: any) => {
  api.error({
    message: "Error",
    description: description,
    placement: "bottomRight",
    icon: icon,
  });
};
