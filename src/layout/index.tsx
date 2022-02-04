import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

type Props = {
  children: ReactNode;
}

const LayoutContainer = ({ children }: Props) => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo"/>
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="forms"><Link to={'/'}>Формы</Link></Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Content className="site-layout-background content">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutContainer;
