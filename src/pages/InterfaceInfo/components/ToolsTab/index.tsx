import CodeHighlighting from '@/components/CodeHighlighting';
import ParamsTable from '@/components/ParamsTable';
import { DEFAULT_ADD_FIELD, requestParam } from '@/pages/InterfaceInfo/components/CodeTemplate';
import { ReloadOutlined } from '@ant-design/icons';
import '@umijs/max';
import { Button, Empty, Form, Image, Select, Space, Spin } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';

export type Props = {
  requestParams?: [];
  data?: API.InterfaceInfo;
  temporaryParams: any;
  requestExampleActiveTabKey: string;
  onSearch: (values: any) => void;
  paramsTableChange: (values: any) => void;
  result?: string;
  resultObj?: API.BaseResponseobject;
  form: any;
  resultLoading: boolean;
};
const ToolsTab: React.FC<Props> = (props) => {
  const {
    requestParams,
    onSearch,
    data,
    form,
    temporaryParams,
    paramsTableChange,
    resultObj,
    result,
    resultLoading,
    requestExampleActiveTabKey,
  } = props;
  const selectAfter = (
    <Select
      disabled
      defaultValue={data?.method}
      style={{ width: 120 }}
      options={[
        { value: 'GET', label: 'GET', disabled: true },
        { value: 'POST', label: 'POST', disabled: true },
        { value: 'PUT', label: 'PUT', disabled: true },
        { value: 'DELETE', label: 'DELETE', disabled: true },
      ]}
    />
  );

  return (
    <>
      <Form
        form={form}
        className="form-input"
        onFinish={(values) => onSearch?.(values)}
        scrollToFirstError
        onReset={() => {
          form.resetFields(['requestParams']);
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
          <Search
            size={'large'}
            readOnly
            style={{ maxWidth: 600 }}
            value={data?.url}
            addonBefore={selectAfter}
            enterButton="发起请求"
            onSearch={form.submit}
          />
        </div>
        <p className="highlightLine" style={{ marginTop: 25 }}>
          请求参数设置：
        </p>
        <Form.Item name={'requestParams'}>
          <ParamsTable
            requestParams={requestParams}
            value={temporaryParams}
            onChange={(value: any) => {
              paramsTableChange?.(value);
            }}
            defaultNewColumn={DEFAULT_ADD_FIELD}
            column={requestParam}
          />
        </Form.Item>
        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Space size="large" wrap>
            <Button type="primary" htmlType="reset" style={{ width: 150 }}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
      <p className="highlightLine" style={{ marginTop: 25 }}>
        返回结果：
      </p>
      <Spin spinning={resultLoading}>
        {result ? (
          <CodeHighlighting codeString={result} language={requestExampleActiveTabKey} />
        ) : (
          <Empty description={'未发起调用，暂无请求信息'} />
        )}
      </Spin>
      <br />
      {resultObj?.data?.imgurl && (
        <Spin spinning={resultLoading}>
          <Image width={400} src={resultObj?.data?.imgurl} />
          <Button
            style={{ position: 'absolute', bottom: 0, marginLeft: 10 }}
            type="primary"
            size="large"
            shape="circle"
            icon={<ReloadOutlined />}
            onClick={form.submit}
          />
        </Spin>
      )}

      {resultObj?.data?.url && (
        <Spin spinning={resultLoading}>
          <Image width={200} src={resultObj.data.url} />
          <Button
            style={{ position: 'absolute', bottom: 0, marginLeft: 10 }}
            type="primary"
            size="large"
            shape="circle"
            icon={<ReloadOutlined />}
            onClick={form.submit}
          />
        </Spin>
      )}

      {resultObj?.data?.info?.url && (
        <Spin spinning={resultLoading}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px' }}>
              <Image width={60} src={resultObj.data.info.picUrl} />
            </div>
            <div>
              <audio src={resultObj.data.info.url} autoPlay controls></audio>
              <Button
                style={{ position: 'absolute', bottom: 12, marginLeft: 10 }}
                type="primary"
                size="large"
                shape="circle"
                icon={<ReloadOutlined />}
                onClick={form.submit}
              />
            </div>
          </div>
        </Spin>
      )}
    </>
  );
};
export default ToolsTab;
