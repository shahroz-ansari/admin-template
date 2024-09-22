import type { FormFieldType } from './form.model';
import formInputMap from './input-map.form';

interface Props {
  field: FormFieldType;
}

export const FormComponent: React.FC<Props> = ({ field }) => {
  const Component = formInputMap[
    field.component.key as keyof typeof formInputMap
  ] as React.LazyExoticComponent<React.FC<Props>>;
  if (!Component) return null;

  return <Component field={field} />;
};
