import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Space, Table } from 'antd';
import { Link } from 'react-router-dom';
import { FormTableItem } from '../types';
import { deleteForm } from '../store/reducers/forms';
import { RootState } from '../store';

const FormTable = () => {
  const dispatch = useDispatch();
  const { forms } = useSelector((state: RootState) => state);

  const clickDeleteForm = (formId: number) => {
    dispatch(deleteForm(formId));
  }

  const columns = useMemo(() => [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Действия',
      key: 'action',
      render: (text: string, form: FormTableItem) => (
        <Space size="large">
          <Link to={{
            pathname: `/form/${form.id}/add`,
            state: {
              form,
            },
          }}>
            Создать элемент
          </Link>
          <Link to={{
            pathname: "/form/edit",
            state: {
              form,
            },
          }}>
              Редактировать
          </Link>
          <a onClick={() => clickDeleteForm(form.id)}>Удалить форму</a>
        </Space>
      ),
    },
  ], [forms]);

  return (
    <>
      <Button className="mb-2" type="primary">
        <Link to={{ pathname: "/form/edit" }}>Создать</Link>
      </Button>
      <Table
        columns={columns}
        dataSource={forms}
        rowKey="id"
      />
    </>

  );
};

export default FormTable;
