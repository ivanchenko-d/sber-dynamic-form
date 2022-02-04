import React, { useRef } from 'react';
import { Form, FormInstance, Input, Modal } from 'antd';
import { FormField } from '../../types';
import { useDispatch } from 'react-redux';
import { addField } from '../../store/reducers/form';

type Props = {
  formId: number;
  field: FormField,
  visible: boolean;
  setIsModalVisible(value: boolean): void;
}

const SettingsFieldModal = ({ formId, field, visible, setIsModalVisible }: Props) => {
  const dispatch = useDispatch();
  const formRef = useRef<FormInstance>(null);

  const handleOk = () => {
    if (!formRef.current) return;
    const newField: FormField = {
      ...formRef.current.getFieldsValue(),
      rules: [],
      type: field.type,
    }
    dispatch(addField(newField));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={formId ? 'Редактирование поля' : 'Добавление поля'}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        ref={formRef}
        initialValues={{
          label: field.label,
          name: field.name,
        }}
      >
        <Form.Item
          label="Заголовок поля"
          name="label">
          <Input/>
        </Form.Item>
        <Form.Item
          label="Код поля"
          name="name">
          <Input/>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SettingsFieldModal;
