import styles from "./SearchBox.module.css";
import Button from "antd/es/button";
import { CloseCircleOutlined, LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, notification, TreeSelect } from "antd";
import { useState } from "react";

interface packageOption {
  value: string;
  title: string;
}
export default function SearchBox() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
  const [api, contextHolder] = notification.useNotification();
  const allOptions: packageOption[] = [
    { title: "react", value: "react" },
    { title: "express", value: "express" },
    { title: "lodash", value: "lodash" },
    { title: "axios", value: "axios" },
    { title: "moment", value: "moment" },
    { title: "chalk", value: "chalk" },
    { title: "mongoose", value: "mongoose" },
    { title: "dotenv", value: "dotenv" },
    { title: "cors", value: "cors" },
    { title: "jsonwebtoken", value: "jsonwebtoken" },
    { title: "redux", value: "redux" },
    { title: "antd", value: "antd" },
    { title: "tailwindcss", value: "tailwindcss" },
    { title: "typescript", value: "typescript" },
    { title: "nodemon", value: "nodemon" },
    { title: "eslint", value: "eslint" },
    { title: "jest", value: "jest" },
    { title: "webpack", value: "webpack" },
    { title: "body-parser", value: "body-parser" },
    { title: "socket.io", value: "socket.io" },
  ];

  const handleSearchChange = (value: string[]) => {
      setSelectedPackages(value);
  };

  const handleCompare = () => {
    selectedPackages.length > 2?showPackageSelectionError():null;
    if (selectedPackages.length > 2) {
      return;
    } else {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000);
    }
  };

  const showPackageSelectionError = () => {
    api.error({
      message: 'Error',
      description:
        'You can only select 2 packages for comparison',
      placement:"bottomRight",
      icon:<CloseCircleOutlined className={styles.crossIconError} />
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
          disabled={isLoading}
          className={styles.treeSelect}
          value={selectedPackages}
          dropdownStyle={{ padding: 0 }}
          placeholder="Select two packages to compare"
          multiple
          notFoundContent="No Result Found"
          onChange={(val) => handleSearchChange(val)}
          treeData={allOptions}
        />

        <Button
          disabled={selectedPackages.length < 2}
          type="primary"
          icon={isLoading ? <LoadingOutlined /> : <SearchOutlined />}
          onClick={handleCompare}
        >
          Compare
        </Button>
      </ConfigProvider>
    {contextHolder}
    </div>
  );
}
