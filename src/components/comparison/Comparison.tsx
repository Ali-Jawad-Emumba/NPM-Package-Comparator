import { Button, Card, ConfigProvider, Table, Tag } from "antd";
import { useSelector } from "react-redux";
import styles from "./Comparison.module.css";
import { State } from "../../utils/types";
import { checkDateAge, getColumns, getTabelData } from "./Comparison.service";

const Comparison: React.FC = () => {
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
          {value.map((val, index) => {
            if (val)
              return (
                <Tag key={index} className="tag" color="gold">
                  {val}
                </Tag>
              );
          })}
        </>
      );
    }
    if (record.name === "Last Modification Date") {
      return checkDateAge(value[0]) || "N/A";
    }
    return value;
  };

  return (
    <Card title="Comparison" bordered={false} className="card">
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
            fontFamily: "Roboto-Regular",
            fontSize: 14,
          },
        }}
      >
        <Table
          columns={getColumns(
            metaDataFirstPackage,
            metaDataSecondPackage,
            renderCells
          )}
          dataSource={getTabelData(metaDataFirstPackage, metaDataSecondPackage)}
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
