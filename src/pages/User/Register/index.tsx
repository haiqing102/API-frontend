import Footer from '@/components/Footer';
import {
  getCaptchaUsingGet,
  userEmailRegisterUsingPost,
  userRegisterUsingPost,
} from '@/services/api-backend/userController';
import { Link, useParams } from '@@/exports';
import {
  LinkOutlined,
  LockOutlined,
  MailOutlined,
  RedditOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { ProFormCaptcha } from '@ant-design/pro-form';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history } from '@umijs/max';
import { Form, message, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Settings from '../../../../config/defaultSettings';

const Register: React.FC = () => {
  const [type, setType] = useState<string>('email');
  const [invitationCode, setInvitationCode] = useState<string>('');
  const [form] = Form.useForm();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setInvitationCode(params.id);
      form.setFieldsValue(invitationCode);
    }
  }, [params.id]);

  useEffect(() => {
    form.setFieldsValue({ invitationCode });
  }, [invitationCode]);
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const doRegister = (res: any) => {
    if (res.data && res.code === 0) {
      message.success('注册成功');
      setTimeout(() => {
        history.push('/user/login');
      }, 100);
    }
  };

  const handleSubmit = async (values: API.UserRegisterRequest) => {
    try {
      // 登录
      const res = await userRegisterUsingPost({
        ...values,
      });
      doRegister(res);
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  const handleEmailSubmit = async (values: API.UserEmailRegisterRequest) => {
    try {
      // 登录
      const res = await userEmailRegisterUsingPost({
        ...values,
      });
      doRegister(res);
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'注册'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '29px 0 0 0',
        }}
      >
        <LoginForm
          form={form}
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          // logo={<img alt="logo" src="/assets/logo.png" />}
          title={
            <a
              href={
                process.env.NODE_ENV === 'production'
                  ? 'https://api.suki.vin'
                  : 'http://localhost:8000'
              }
            >
              <img src="/assets/logo_title.png" width={320}></img>
            </a>
          }
          subTitle={<p style={{ marginTop: 20 }}>致力于提供安全、稳定、高效的接口调用服务</p>}
          initialValues={{
            invitationCode: invitationCode,
          }}
          onFinish={async (values) => {
            if (type === 'account') {
              await handleSubmit(values as API.UserRegisterRequest);
            } else {
              await handleEmailSubmit(values as API.UserEmailRegisterRequest);
            }
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'email',
                label: '电子邮箱注册',
              },
              {
                key: 'account',
                label: '平台账号注册',
              },
            ]}
          />
          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <RedditOutlined />,
                }}
                placeholder={'用户昵称'}
              />
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'账号'}
                rules={[
                  {
                    required: true,
                    message: '❗账号不能为空',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '❗密码不能为空',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'确认密码'}
                rules={[
                  {
                    required: true,
                    message: '❗确认密码不能为空',
                  },
                ]}
              />
              <ProFormText
                name="invitationCode"
                fieldProps={{
                  size: 'large',
                  prefix: <LinkOutlined />,
                }}
                placeholder={'邀请码，没有可不填'}
              />
            </>
          )}
          {type === 'email' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <RedditOutlined />,
                }}
                placeholder={'用户昵称'}
              />
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MailOutlined />,
                }}
                name="emailAccount"
                placeholder={'电子邮箱'}
                rules={[
                  {
                    required: true,
                    message: '❗邮箱不能为空',
                  },
                  {
                    pattern: /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/,
                    message: '❗邮箱格式不合法',
                  },
                ]}
              />
              <ProFormText
                name="invitationCode"
                fieldProps={{
                  size: 'large',
                  prefix: <LinkOutlined />,
                }}
                placeholder={'邀请码，没有可不填'}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'秒后重新获取'}`;
                  }
                  return '获取验证码';
                }}
                phoneName={'emailAccount'}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: '❗验证码不能为空',
                  },
                ]}
                onGetCaptcha={async (emailAccount) => {
                  const res = await getCaptchaUsingGet({ emailAccount });
                  if (res.data && res.code === 0) {
                    message.success('验证码发送成功');
                    return;
                  }
                }}
              />
            </>
          )}
          <ProFormCheckbox
            initialValue={true}
            name="agreeToAnAgreement"
            rules={[
              () => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(new Error('请阅读并同意平台协议'));
                  }
                  return Promise.resolve();
                },
                required: true,
              }),
            ]}
          >
            已阅读并同意：
            <a
              target={'_blank'}
              href={
                'https://gitee.com/qimu6/statement/blob/master/%E9%9A%90%E7%A7%81%E5%8D%8F%E8%AE%AE.md#%E6%9F%92%E6%9C%A8%E6%8E%A5%E5%8F%A3-%E9%9A%90%E7%A7%81%E6%9D%A1%E6%AC%BE'
              }
              rel="noreferrer"
            >
              隐私协议、
            </a>
            <a
              target={'_blank'}
              href={
                'https://gitee.com/qimu6/statement/blob/master/%E6%9F%92%E6%9C%A8%E6%8E%A5%E5%8F%A3%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE.md#%E6%9F%92%E6%9C%A8%E6%8E%A5%E5%8F%A3%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE'
              }
              rel="noreferrer"
            >
              用户协议
            </a>
          </ProFormCheckbox>
          <div
            style={{
              marginTop: -18,
            }}
          >
            <Link
              to={'/user/login'}
              style={{
                float: 'right',
              }}
            >
              <p>已有账号？点击前往登录</p>
            </Link>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;
