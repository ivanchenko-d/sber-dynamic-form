import { Rule } from "antd/lib/form";

export type FormItem = {
  id: number;
  name: string;
  description: string;
  fields: FormField[];
}

export type FormTableItem = Pick<FormItem, 'id' | 'name' | 'description'>;

export enum FormFieldType {
  Text = 'text',
  TextArea = 'textarea',
  Date = 'date',
}

export type FormField = {
  name: string;
  label: string;
  type: FormFieldType;
  rules: Rule[];
};
