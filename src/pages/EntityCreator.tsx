import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, DatePicker, Form, Input } from 'antd';
import Title from 'antd/es/typography/Title';
import { FormFieldType, FormItem } from '../types';

const EntityCreator = () => {
  const location = useLocation<{ form: FormItem; }>();
  const { form } = location.state;

  const getFieldByType = (type: FormFieldType) => {
    switch (type) {
      case FormFieldType.Text:
        return <Input />;
      case FormFieldType.TextArea:
        return <Input.TextArea />;
      case FormFieldType.Date:
        return <DatePicker />;
      default:
        return null;
    }
  }

  const createEntity = (values: any) => {
    console.log('Создание сущности \n ' + JSON.stringify(values));
  }

  const fields = useMemo(() => form.fields.map(field => {
    return (
      <Form.Item key={field.name} label={field.label} name={field.name}>
        {getFieldByType(field.type)}
      </Form.Item>
    )
  }), []);

  return (
    <>
      <Title level={4}>Создание сущности на основании формы "{form.name}"</Title>
      <Form onFinish={createEntity}>
        {fields}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </>

  );
};

export default EntityCreator;
