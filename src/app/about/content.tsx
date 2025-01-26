/** @format */

'use client';

import { Typography, Layout, Space, Card, Row, Col, List } from 'antd';
import { TeamOutlined, SafetyOutlined, TrophyOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AboutContent() {
  const features: Feature[] = [
    {
      icon: <SafetyOutlined style={{ fontSize: '2rem', color: 'var(--primary-color)' }} />,
      title: 'Security & Trust',
      description: 'We ensure the highest level of security for our users.',
    },
    {
      icon: <TrophyOutlined style={{ fontSize: '2rem', color: 'var(--primary-color)' }} />,
      title: 'Top Quality',
      description: 'Only the best products and services for our users.',
    },
    {
      icon: <TeamOutlined style={{ fontSize: '2rem', color: 'var(--primary-color)' }} />,
      title: 'Vibrant Community',
      description: 'A growing and supportive community around our platform.',
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '2rem', color: 'var(--primary-color)' }} />,
      title: 'Global Access',
      description: 'Available in many countries and accessible anytime, anywhere.',
    },
  ];

  return (
    <Layout className="bg-transparent">
      <Content>
        <Space direction="vertical" size="large" className="w-full">
          <Title level={1} className="text-main text-center">
            About Us
          </Title>

          <div>
            <Paragraph className="text-justify text-base">
              Welcome to our platform. We aim to provide the best experience for our users.
            </Paragraph>
            <Paragraph className="text-justify text-base">Join us as we continue to grow and innovate.</Paragraph>
          </div>

          <Title level={2} className="text-center">
            Why Choose Us?
          </Title>
          <Row gutter={[16, 16]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card hoverable className="h-full">
                  <div className="p-6 text-center" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <Card.Meta
                    title={<span className="text-main">{feature.title}</span>}
                    description={feature.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <Card>
            <Title level={3}>Our Commitments</Title>
            <List
              dataSource={[
                'Authentic Quality',
                'Transparent Information',
                'Customer Support',
                'Platform Updates',
                'Healthy Community',
              ]}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>
                    <SafetyOutlined className="text-main mr-2" aria-hidden="true" />
                    {item}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </Card>

          <Paragraph className="text-2xl text-center text-main uppercase">Join Us Now!</Paragraph>
        </Space>
      </Content>
    </Layout>
  );
}
