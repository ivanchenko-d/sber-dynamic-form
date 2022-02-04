import React, { useMemo } from 'react';
import { Space, Table } from 'antd';
import { FormField, FormItem } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { deleteField } from '../../store/reducers/form';

const FieldConstructor = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  if (!form) return null;

  const clickDeleteField = (fieldName: string) => {
    dispatch(deleteField(fieldName));
  }

  const columns = [
    {
      title: 'Название',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Тип поля',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (text: string, field: FormField) => (
        <Space size="large">
          <a onClick={() => clickDeleteField(field.name)}>Удалить</a>
        </Space>
      ),
    },
  ];

  return <Table pagination={false} columns={columns} dataSource={form.fields} rowKey="name" />;
};

export default FieldConstructor;
