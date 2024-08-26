import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { FormProvider as ReactHookFormProvider, useForm } from 'react-hook-form';
import type { FormConfig } from '../../models/form.model';

interface Props {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  config: FormConfig;
}

interface DefaultValues {
  [key: string]: unknown;
}

const FormProvider: React.FC<Props> = ({ children, onSubmit, config }) => {
  const defaultValues = useMemo(() => {
    return Object.values(config.properties).reduce((values, property) => {
      values[property.name] = property.value;
      return values;
    }, {} as DefaultValues);
  }, [config]);

  const formMethods = useForm({
    mode: 'onChange',
    defaultValues: defaultValues,
  });

  return (
    <ReactHookFormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </ReactHookFormProvider>
  );
};

export default FormProvider;
