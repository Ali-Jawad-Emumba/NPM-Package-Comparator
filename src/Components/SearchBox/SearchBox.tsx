import styles from "./SearchBox.module.css";
import Button from "antd/es/button";
import {
  CloseCircleOutlined,
  LoadingOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ConfigProvider, notification, TreeSelect } from "antd";
import { useState } from "react";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { storeSelectedPackagesData } from "../../state/slice";

interface PackageOption {
  value: string;
  title: string;
}
const SearchBox: React.FC = () => {
  const [isCompareBtnLoading, setIsCompareBtnLoading] =
    useState<boolean>(false);
  const [isListLoading, setIsListLoading] = useState<boolean>(false);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [packageOptions, setPackageOptions] = useState<PackageOption[]>([]);
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();

  const fetchPackages = async (value: string) => {
    const fetchFn = await fetch(`https://api.npms.io/v2/search?q=${value}`);
    const response = await fetchFn.json();
    return response.results;
  };

  const fetchSelectedPackgesDetails = async (value: string) => {
    const encodedVal = encodeURIComponent(value).replace(/%40/g, "@");
    const fetchFn = await fetch(`https://api.npms.io/v2/package/${encodedVal}`);
    const response = await fetchFn.json();
    return response;
  };
  const handleUserSearch = (searchedValue: string) => {
    if (searchedValue) {
      setIsListLoading(true);
      const fetchData = async () => {
        const data = await fetchPackages(searchedValue);
        setIsListLoading(!data && data.length === 0);
        const packagesList: PackageOption[] = data.map((element: any) => ({
          title: element.package.name,
          value: element.package.name,
        }));
        setPackageOptions(packagesList);
      };
      fetchData();
    } else {
      setTimeout(() => setPackageOptions([]), 1500);

      isListLoading ? setIsListLoading(false) : null;
      return;
    }
  };
  const showPackageSelectionError = () => {
    api.error({
      message: "Error",
      description: "You can only select 2 packages for comparison",
      placement: "bottomRight",
      icon: <CloseCircleOutlined className={styles.crossIconError} />,
    });
  };
  const debouncedSearch = debounce(handleUserSearch, 500);
  const handleSearchChange = (value: string[]) => {
    setSelectedPackages(value);
  };

  const handleCompare = async () => {
    selectedPackages.length > 2 ? showPackageSelectionError() : null;
    if (selectedPackages.length > 2) {
      return;
    } else {
      setIsCompareBtnLoading(true);
      let selectedPackagesData = await Promise.all(
        selectedPackages.map(
          async (val) => await fetchSelectedPackgesDetails(val)
        )
      );
      selectedPackagesData = selectedPackagesData.filter((data) => !data.code);
      setIsCompareBtnLoading(false);
      dispatch(storeSelectedPackagesData(selectedPackagesData));
    }
  };
  return (
    <div className={styles.searchBoxContainer}>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
          },
          components: {
            TreeSelect: {
              nodeSelectedBg: "rgba(0, 0, 0, 0.04)",
            },
          },
        }}
      >
        <TreeSelect
          disabled={isCompareBtnLoading}
          className={styles.treeSelect}
          value={selectedPackages}
          dropdownStyle={{ padding: 0 }}
          placeholder="Select two packages to compare"
          multiple
          notFoundContent={
            isListLoading ? (
              <p>
                <LoadingOutlined /> Loading...
              </p>
            ) : !isListLoading && packageOptions.length === 0 ? null : (
              "No Result Found"
            )
          }
          onChange={(val) => handleSearchChange(val)}
          onSearch={(val) => debouncedSearch(val)}
          treeData={packageOptions}
        />

        <Button
          disabled={selectedPackages.length < 2}
          type="primary"
          icon={isCompareBtnLoading ? <LoadingOutlined /> : <SearchOutlined />}
          onClick={handleCompare}
          className={styles.compareBtn}
        >
          Compare
        </Button>
      </ConfigProvider>
      {contextHolder}
    </div>
  );
};

export default SearchBox;
