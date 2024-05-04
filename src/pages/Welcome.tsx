import GetGiftModal from '@/components/Gift/GetGift';
import { getUserByInvitationCodeUsingPost } from '@/services/api-backend/userController';
import { Link, useParams } from '@@/exports';
import { useModel } from '@umijs/max';
import { Card, theme, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Text, Title } = Typography;
/**
 * 每个单独的卡片，为了复用样式抽成了组件
 * @param param0
 * @returns
 */
const InfoCard: React.FC<{
  title: any;
  index: number;
  desc: any;
  href: string;
}> = ({ title, index, desc }) => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        boxShadow: token.boxShadow,
        borderRadius: '8px',
        fontSize: '14px',
        color: token.colorTextSecondary,
        lineHeight: '22px',
        padding: '14px 19px',
        minWidth: '220px',
        flex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            lineHeight: '22px',
            backgroundSize: '100%',
            textAlign: 'center',
            padding: '8px 16px 16px 12px',
            color: '#FFF',
            fontWeight: 'bold',
            backgroundImage:
              "url('https://gw.alipayobjects.com/zos/bmw-prod/daaf8d50-8e6d-4251-905d-676a24ddfa12.svg')",
          }}
        >
          {index}
        </div>
        <div
          style={{
            fontSize: '16px',
            color: token.colorText,
            paddingBottom: 8,
          }}
        >
          {title}
        </div>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: token.colorTextSecondary,
          textAlign: 'justify',
          lineHeight: '22px',
          marginBottom: 8,
        }}
      >
        {desc}
      </div>
      <br />
    </div>
  );
};

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<API.UserVo>();
  const params = useParams();
  const getUserByInvitationCode = async () => {
    const res = await getUserByInvitationCodeUsingPost({ invitationCode: params.id });
    if (res.code === 0 && res.data) {
      if (initialState?.loginUser && initialState?.loginUser.invitationCode === params.id) {
        // message.error("不能邀请自己")
        return;
      }
      if (!initialState?.loginUser) {
        setOpen(true);
        setData(res.data);
      }
    }
  };
  useEffect(() => {
    if (params.id) {
      getUserByInvitationCode();
    }
  }, []);

  return (
    <>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <div
          style={{
            backgroundPosition: '100% -30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '274px auto',
            backgroundImage:
              "url('https://gw.alipayobjects.com/mdn/rms_a9745b/afts/img/A*BuFmQqsB2iAAAAAAAAAAAAAAARQnAQ')",
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: token.colorTextHeading,
            }}
          >
            <Title level={3}> 欢迎使用 API 接口服务平台 🎉</Title>
          </div>
          <div
            style={{
              fontSize: '14px',
              color: token.colorTextSecondary,
              lineHeight: '22px',
              marginTop: 16,
              marginBottom: 32,
              width: '100%',
            }}
          >
            <Text strong>
              <Title level={4}>
                API 接口服务平台是一个为用户和开发者提供全面 API 接口调用服务的平台 🛠
              </Title>
              <Title level={5} style={{ lineHeight: '27px' }}>
                😀
                作为用户，您可以根据自己的需求浏览和选择合适的接口，并通过签到/邀请/购买积分来获取接口调用权限。您可以在线进行接口调试，快速验证接口的功能和效果。
                <br />
                💻 作为开发者，我们提供了
                {/*todo 地址修改*/}
                <a href="https://github.com/haiqing102/API-sdk" target="_blank" rel="noreferrer">
                  客户端SDK
                </a>
                ， 通过
                <Link to="/account/center">开发者凭证</Link>
                即可将 API 接口轻松集成到您的项目中，实现更高效的开发和调用。
                <br />
                🤝 您可以将自己的接口接入到 API 接口服务平台上，并发布给其他的用户使用。
                您可以管理自己的各个接口，以便更好地分析和优化接口性能。
                <br />
                👌 我们还提供了
                <a
                  href={
                    process.env.NODE_ENV === 'production'
                      ? 'https://doc.suki.vin'
                      : 'http://localhost:8001/'
                  }
                  target={'_blank'}
                  rel="noreferrer"
                >
                  开发者在线文档
                </a>
                和技术支持，帮助您快速地接入和发布接口。
                <br />
                🏁 无论您是用户还是开发者，API
                接口服务平台都致力于提供安全、稳定、高效的接口调用服务，帮助您实现更快速、便捷的开发和调用体验。
              </Title>
            </Text>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <InfoCard
              index={1}
              href=""
              title={<Title level={5}>多样化的接口选择</Title>}
              desc={
                <Text strong>
                  平台上提供丰富多样的接口供您选择，涵盖了各个领域的功能和服务，满足不同需求。
                </Text>
              }
            />
            <InfoCard
              index={2}
              href=""
              title={<Title level={5}>在线调试功能</Title>}
              desc={
                <Text strong>
                  您可以在平台上进行接口在线调试，快速验证接口的功能和效果，节省了开发调试的时间和工作量。
                </Text>
              }
            />
            <InfoCard
              index={3}
              href=""
              title={<Title level={5}>客户端SDK支持</Title>}
              desc={
                <Text strong>
                  为了方便开发者集成接口到自己的项目中，平台提供了客户端SDK，使调用接口变得更加简单和便捷。
                </Text>
              }
            />
            <InfoCard
              index={4}
              href=""
              title={<Title level={5}>开发者文档和技术支持</Title>}
              desc={
                <Text strong>
                  平台提供了详细的开发者文档和技术支持，帮助开发者快速接入和发布接口，解决遇到的问题和困难。
                </Text>
              }
            />
            <InfoCard
              index={5}
              href=""
              title={<Title level={5}>安全和稳定</Title>}
              desc={
                <Text strong>
                  平台致力于提供安全和稳定的接口调用服务，采用了安全措施和技术手段，保障用户数据的安全性和隐私保护。
                </Text>
              }
            />
          </div>
        </div>
        <GetGiftModal data={data} onCancel={() => setOpen(false)} open={open} />
      </Card>
    </>
  );
};

export default Welcome;
