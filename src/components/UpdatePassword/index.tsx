import { LockOutlined } from '@ant-design/icons';
import { LoginForm } from '@ant-design/pro-components';
import { ProFormText } from '@ant-design/pro-form';
import { ProFormInstance } from '@ant-design/pro-form/lib';
import { Button, Modal } from 'antd';
import React, { useEffect, useRef } from 'react';

export type Props = {
  openPwd: boolean;
  onCancel: () => void;
  data?: API.UserVo;
  updatePwdSubmit: (values: API.UserUpdateRequest) => Promise<void>;
};

const UpdatePassword: React.FC<Props> = (props) => {
  const formRef = useRef<ProFormInstance>();
  const { openPwd, data, onCancel, updatePwdSubmit } = props;
  useEffect(() => {
    // 关闭表单时刷新form
    if (!openPwd) {
      formRef.current?.resetFields();
    }
  }, [openPwd]);
  return (
    <Modal footer={null} centered open={openPwd} width={500} onCancel={onCancel}>
      <LoginForm
        formRef={formRef}
        contentStyle={{
          minWidth: 280,
          maxWidth: '75vw',
        }}
        submitter={{
          render: () => {
            return [
              <>
                <Button
                  type={'primary'}
                  key="submit"
                  block
                  onClick={() => {
                    formRef.current?.submit();
                  }}
                >
                  {data?.userPassword ? '修改密码' : '设置密码'}
                </Button>
              </>,
            ];
          },
        }}
        onFinish={async (values) => {
          updatePwdSubmit?.(values);
        }}
      >
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          name="userPassword"
          placeholder={'请输入密码，不少于4位'}
          rules={[
            {
              required: true,
              message: '密码不能为空',
            },
            {
              min: 4,
              message: '密码不能少于4位',
            },
          ]}
        />
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          name="re_pwd"
          placeholder={'请确认密码'}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('userPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('确认密码与密码不一致'));
              },
            }),
          ]}
        />
      </LoginForm>
    </Modal>
  );
};

export default UpdatePassword;
