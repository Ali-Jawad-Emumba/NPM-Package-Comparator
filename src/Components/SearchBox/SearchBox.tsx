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
import { setSelectedPackagesData } from "../../state/slice";

interface PackageOption {
  value: string;
  title: string;
}
const SearchBox = () => {
  const [isCompareBtnLoading, setIsCompareBtnLoading] =
    useState<boolean>(false);
  const [isListLoading, setIsListLoading] = useState<boolean>(false);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [packageOptions, setPackageOptions] = useState<PackageOption[]>([]);
  const [api, contextHolder] = notification.useNotification();
  const [searchedPackagesResults, setSearchedPackagesResults] = useState<any[]>(
    []
  );
  const dispatch = useDispatch();

  const handleUserSearch = (searchedValue: string) => {
    if (searchedValue) {
      setIsListLoading(true);
      const fetchData = async () => {
        const fetchFn = await fetch(
          `https://api.npms.io/v2/search?q=${searchedValue}`
        );
        const response = await fetchFn.json();
        const data = response;
        setSearchedPackagesResults(data.results);
        setIsListLoading(!data.results && data.results.length === 0);
        const packagesList: PackageOption[] = data.results.map(
          (element: any) => ({
            title: element.package.name,
            value: element.package.name,
          })
        );
        setPackageOptions(packagesList);
      };
      fetchData();
    } else {
      setTimeout(() => setPackageOptions([]), 1500);

      isListLoading ? setIsListLoading(false) : null;
      return;
    }
  };

  const debouncedSearch = debounce(handleUserSearch, 500);
  const handleSearchChange = (value: string[]) => {
    setSelectedPackages(value);
  };

  const handleCompare = () => {
    selectedPackages.length > 2 ? showPackageSelectionError() : null;
    if (selectedPackages.length > 2) {
      return;
    } else {
      setIsCompareBtnLoading(true);
      setTimeout(() => {
        setIsCompareBtnLoading(false);
        const selectedPackagesData = searchedPackagesResults.filter((result) =>
          selectedPackages.includes(result.package.name)
        );
        dispatch(setSelectedPackagesData(selectedPackagesData));
      }, 2000);
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
        >
          Compare
        </Button>
      </ConfigProvider>
      {contextHolder}
    </div>
  );
};

export default SearchBox;
