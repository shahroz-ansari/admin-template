import type { ReactNode } from 'react';
import { FormProvider as ReactHookFormProvider, useForm } from 'react-hook-form';

interface Props {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
}

const FormInitializer: React.FC<Props> = ({ children, onSubmit }) => {
  const formMethods = useForm({
    mode: 'onChange',
  });

  return (
    <ReactHookFormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </ReactHookFormProvider>
  );
};

export default FormInitializer;
