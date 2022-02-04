import React, { useState } from 'react';
import Sider from 'antd/es/layout/Sider';
import { Menu } from 'antd';
import SettingsFieldModal from './SettingsFieldModal';
import { FormField, FormFieldType } from '../../types';

type Props = {
  formId: number;
}

const FieldSelection = ({ formId }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [field, setField] = useState<FormField | null>(null);

  const addField = (fieldType: FormFieldType) => {
    setIsModalVisible(true);
    setField({
      name: '',
      label: '',
      type: fieldType,
      rules: [],
    })
  }

  return (
    <>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.SubMenu key="sub1" title="Basic">
            <Menu.Item key="text" onClick={() => addField(FormFieldType.Text)}>Text</Menu.Item>
            <Menu.Item key="textarea">Textarea</Menu.Item>
            <Menu.Item key="date">Date</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key="sub2" title="Additional">
            <Menu.Item disabled key="datetime">Datetime</Menu.Item>
            <Menu.Item disabled key="image">Image</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      {isModalVisible && field && <SettingsFieldModal
        formId={formId}
        field={field}
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />}
    </>
  );
};

export default FieldSelection;
