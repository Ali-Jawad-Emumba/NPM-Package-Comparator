import styles from "./SearchBox.module.css";
import Button from "antd/es/button";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { ConfigProvider, TreeSelect } from "antd";
import { useState } from "react";

interface packageOption {
  value: string;
  title: string;
}
export default function SearchBox() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);
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
    if (selectedPackages.length <= 2 && value.length <= 2)
      setSelectedPackages(value);
  };

  const handleCompare = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className={styles.searchBoxContainer}>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
          },
        }}
      >
        <TreeSelect
          className={styles.borderRadTwo}
          showSearch
          value={selectedPackages}
          placeholder="Please select"
          multiple
          onChange={(val) => handleSearchChange(val)}
          treeData={allOptions}
        />

        <Button
          disabled={selectedPackages.length !== 2}
          type="primary"
          icon={isLoading ? <LoadingOutlined /> : <SearchOutlined />}
          onClick={handleCompare}
        >
          Compare
        </Button>
      </ConfigProvider>
    </div>
  );
}
