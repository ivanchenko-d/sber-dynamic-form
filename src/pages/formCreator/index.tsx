import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button, Divider, Form, Input, Layout } from 'antd';
import { FormItem } from '../../types';
import FieldSelection from './FieldSelection';
import Title from 'antd/es/typography/Title';
import FieldConstructor from './FieldConstructor';
import { initForm, clearForm } from '../../store/reducers/form';
import { RootState } from '../../store';
import { saveForm } from '../../store/reducers/forms';

const FormCreator = () => {
  const location = useLocation<{ form?: FormItem; }>();
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.form);

  useEffect(() => {
    if (location.state?.form) {
      dispatch(initForm(location.state.form));
    }
    return () => {
      dispatch(clearForm())
    }
  }, []);

  const onFinish = (values: any) => {
    const data: FormItem = {
      ...values,
      id: form.id,
      fields: form.fields,
    }
    dispatch(saveForm(data));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
      <FieldSelection formId={form.id} />
      <div className="main">
        <Form
          initialValues={{
            name: location.state?.form?.name || form.name,
            description: location.state?.form?.description || form.description,
          }}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 18 }}
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Title level={4}>Конструктор полей</Title>
          <FieldConstructor />
          <Divider />
          <Title level={4}>Настройка формы</Title>
          <Form.Item
            label="Название"
            name="name"
            rules={[{ required: true, message: 'Пожалуйста введите название формы!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Описание"
            name="description"
            rules={[{ required: true, message: 'Пожалуйста введите описание формы!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
};

export default FormCreator;
