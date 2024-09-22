import { useEffect, type ReactNode } from 'react';
import { FormProvider as ReactHookFormProvider, useForm } from 'react-hook-form';
import CircularLoader from '../../components/loader/circular-loader.component';

interface Props {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  edit?: boolean;
}

const FormInitializer: React.FC<Props> = ({ children, onSubmit, data, edit }) => {
  const formMethods = useForm({
    mode: 'onChange',
  });

  useEffect(() => {
    formMethods.reset(data);
  }, [data, formMethods]);

  if (edit && !data) return <CircularLoader />;

  return (
    <ReactHookFormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </ReactHookFormProvider>
  );
};

export default FormInitializer;
