import Footer from '@/components/Footer';
import {
  getCaptchaUsingGet,
  userEmailLoginUsingPost,
  userLoginUsingPost,
} from '@/services/api-backend/userController';
import { Link } from '@@/exports';
import {
  GithubOutlined,
  LockOutlined,
  MailOutlined,
  QqOutlined,
  UserOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { ProFormCaptcha } from '@ant-design/pro-form';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet, history, useModel } from '@umijs/max';
import { message, Tabs } from 'antd';
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';

const ActionIcons = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      marginLeft: '12px',
      color: 'rgba(0, 0, 0, 0.3)',
      fontSize: '22px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    };
  });
  return (
    <>
      <QqOutlined key="QqOutlined" className={langClassName} />
      <WechatOutlined key="WechatOutlined" className={langClassName} />
      <GithubOutlined key="GithubOutlined" className={langClassName} />
    </>
  );
};

const Login: React.FC = () => {
  const [type, setType] = useState<string>('email');
  const { setInitialState } = useModel('@@initialState');
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
  const doLogin = (res: any) => {
    if (res.data && res.code === 0) {
      message.success('登陆成功');
      setTimeout(() => {
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
      }, 100);
      setInitialState({ loginUser: res.data, settings: Settings });
    }
  };
  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPost({
        ...values,
      });
      doLogin(res);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  const handleEmailSubmit = async (values: API.UserEmailLoginRequest) => {
    try {
      // 登录
      const res = await userEmailLoginUsingPost({
        ...values,
      });
      doLogin(res);
    } catch (error) {
      const defaultLoginFailureMessage = '登录失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'登录'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '105px 0 0 0',
        }}
      >
        <LoginForm
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
            autoLogin: true,
          }}
          actions={['其他登录方式：', <ActionIcons key="icons" />]}
          onFinish={async (values) => {
            if (type === 'account') {
              await handleSubmit(values as API.UserLoginRequest);
            } else {
              await handleEmailSubmit(values as API.UserEmailLoginRequest);
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
                label: '电子邮箱登录',
              },
              {
                key: 'account',
                label: '账号密码登录',
              },
            ]}
          />
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入账号'}
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
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '❗密码不能为空',
                  },
                ]}
              />
            </>
          )}
          {type === 'email' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MailOutlined />,
                }}
                name="emailAccount"
                placeholder={'请输入邮箱'}
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
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <Link
              to={'/user/register'}
              style={{
                float: 'right',
              }}
            >
              还没账号？点击前往注册
            </Link>
          </div>
        </LoginForm>
      </div>
      {<Footer />}
    </div>
  );
};
export default Login;
