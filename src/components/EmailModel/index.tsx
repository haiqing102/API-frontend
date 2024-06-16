import { getCaptchaUsingGet } from '@/services/api-backend/userController';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { LoginForm } from '@ant-design/pro-components';
import { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import { ProFormInstance } from '@ant-design/pro-form/lib';
import { Button, message, Modal } from 'antd';
import React, { useEffect, useRef } from 'react';

export type Props = {
  open: boolean;
  onCancel: () => void;
  data?: API.UserVo;
  bindSubmit: (values: API.UserBindEmailRequest) => Promise<void>;
};

const EmailModel: React.FC<Props> = (props) => {
  const formRef = useRef<ProFormInstance>();
  const { open, data, onCancel, bindSubmit } = props;
  useEffect(() => {
    // 关闭表单时刷新form
    if (!open) {
      formRef.current?.resetFields();
    }
  }, [open]);
  return (
    <Modal footer={null} centered open={open} width={500} onCancel={onCancel}>
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
                  {data?.email ? '更新邮箱' : '绑定邮箱'}
                </Button>
              </>,
            ];
          },
        }}
        onFinish={async (values) => {
          bindSubmit?.(values);
        }}
      >
        <ProFormText
          fieldProps={{
            size: 'large',
            prefix: <MailOutlined />,
          }}
          name="email"
          placeholder={'Email'}
          rules={[
            {
              required: true,
              message: '邮箱不能为空！',
            },
            {
              pattern: /^\w+(-+.\w+)*@\w+(-.\w+)*.\w+(-.\w+)*$/,
              message: '不合法的邮箱！',
            },
          ]}
        />
        <ProFormCaptcha
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined />,
          }}
          captchaProps={{
            size: 'large',
          }}
          placeholder={'请输入验证码'}
          captchaTextRender={(timing, count) => {
            if (timing) {
              return `${count} ${'秒后重新获取'}`;
            }
            return '获取验证码';
          }}
          phoneName={'email'}
          name="captcha"
          rules={[
            {
              required: true,
              message: '验证码不能为空！',
            },
          ]}
          onGetCaptcha={async (email) => {
            const res = await getCaptchaUsingGet({ email });
            if (res.data && res.code === 0) {
              message.success('验证码发送成功');
              return;
            }
          }}
        />
      </LoginForm>
    </Modal>
  );
};

export default EmailModel;
