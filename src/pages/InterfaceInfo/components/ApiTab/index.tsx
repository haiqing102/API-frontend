import CodeHighlighting from '@/components/CodeHighlighting';
import {
  requestParameters,
  responseParameters,
} from '@/pages/InterfaceInfo/components/CodeTemplate';
import '@umijs/max';
import { Table } from 'antd';
import { Column } from 'rc-table';
import React from 'react';

export type Props = {
  requestParams?: [];
  responseParams?: [];
  errorCodeTab: () => void;
  sampleCode: () => void;
  returnCode: string;
};
const ApiTab: React.FC<Props> = (props) => {
  const { requestParams, errorCodeTab, responseParams, returnCode } = props;

  return (
    <>
      <p className="highlightLine" style={{ marginTop: 15 }}>
        请求参数说明：
      </p>
      <Table
        dataSource={requestParams && requestParams.length > 0 ? requestParams : requestParameters}
        pagination={false}
        style={{ maxWidth: 700 }}
        size={'small'}
      >
        <Column width={150} title="参数名称" dataIndex="fieldName" key="fieldName" />
        <Column width={150} title="必选" dataIndex="required" key="required" />
        <Column width={150} title="类型" dataIndex="type" key="type" />
        <Column title="描述" dataIndex="desc" key="desc" />
      </Table>
      <p className="highlightLine" style={{ marginTop: 15 }}>
        响应参数说明：<a onClick={() => errorCodeTab?.()}>错误码参照</a>
      </p>
      <Table
        dataSource={
          responseParams && responseParams?.length > 0 ? responseParams : responseParameters
        }
        pagination={false}
        style={{ maxWidth: 450 }}
        size={'small'}
      >
        <Column width={150} title="参数名称" dataIndex="fieldName" key="fieldName" />
        <Column width={150} title="类型" dataIndex="type" key="type" />
        <Column title="描述" dataIndex="desc" key="desc" />
      </Table>
      {/*<p className="highlightLine" style={{marginTop: 15}}>请求示例：</p>*/}
      <p className="highlightLine" style={{ marginTop: 15 }}>
        返回示例：
      </p>
      <CodeHighlighting codeString={returnCode} language={'javascript'} />
    </>
  );
};
export default ApiTab;
