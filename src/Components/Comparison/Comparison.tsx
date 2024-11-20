import { Button, Card, ConfigProvider, Table, TableProps, Tag } from "antd";
import styles from './Comparison.module.css' 

interface ComparisonColumns{
  key?:string
    name:string,
    package1:string|string[],
    package2:string|string[]
}
export default function Comparison(){
      const renderCells=(record:{name:string}, value:string[])=>{
        if (record.name === "Keywords" && Array.isArray(value)) {
          return (
            <>
              {value.map((val, index) => (
                <Tag key={index} className={styles.tag}>
                  {val}
                </Tag>
              ))}
            </>
          );
        }
        if (record.name==="Description"){
          return <p style={{textAlign:'left'}}>{value}</p>
        }
        if ((record.name==='Repository' || record.name==='Authors/Publishers') && Array.isArray(value)){
          return (
            <>
            {value.map((val, index)=>(<Button key={index} type="link">{val}</Button>))}</>
          )
        }
        if (record.name==='License' && Array.isArray(value)){
          return (
            <>{value.map((val, index)=>(<Tag key={index} className={styles.tag} color="gold">{val}</Tag>))}</>
            )
        }
        return value;
      }
      const columns: TableProps<ComparisonColumns>['columns'] = [
        {
          title: 'Package Name',
          dataIndex: 'name',
          key: 'name',
          rowScope:'row',
          width:'25%',
        },
        {
          title: 'package 1',
          dataIndex: 'package1',
          key: 'package1',
          width:'35%',
          align:'center',
          render: (value: any[], record: { name: string; }) => renderCells(record, value),
        },
        {
          title: 'package 2',
          dataIndex: 'package2',
          key: 'package2',
          width:'35%',
          align:'center',
          render: (value: any[], record: { name: string; }) => renderCells(record, value),
        }
      ];
      
      const data:ComparisonColumns[] = [
        {
          key: '1',
          name: 'Description',
          package1: 'Hooks for managing, caching, and syncing asynchronous and remote data',
          package2:'React Hooks library for remote data fetching'
        },
        {
          key: '2',
          name: 'Keywords',
          package1:[].length>0?[]:'N/A',
         package2:['swr', 'react', 'hooks', 'requests'],
        
        },
        {
          key: '3',
          name: 'Repository',
          package1:['HomePage', 'Bugs', 'GitHub'],
          package2:['HomePage', 'Bugs', 'GitHub'],
        },
        {
            key: '4',
            name: 'License',
            package1:['MIT'],
            package2:['MIT'],
          },
          {
            key: '5',
            name: 'Last Modification Date',
            package1:'A month ago',
            package2:'A month ago',
          },
          {
            key: '6',
            name: 'Authors/Publishers',
            package1:['tannerlinsley'].length>0?['tannerlinsley']:'N/A',
            package2:[].length>0?[]:'N/A',
          },
          {
            key: '7',
            name: 'Maintainers',
            package1:'tannerlinsley@gmail.com',
            package2:'aaron.brown@vercel.com',
          },
      ];
      




    return (
        <Card title="Comparison" bordered={false} className="card">
         <ConfigProvider theme={{token:{borderRadius:2}}}>
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
    )
}