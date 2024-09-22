import { Button, Stack } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { FormComponent } from '../../packages/form/component.form';
import FormInitializer from '../../packages/form/initializer.form';
import ProductAddFormConfig from './product-add.form.json';

type AddProductPropertiesType = typeof ProductAddFormConfig.properties;

const ProductsAddContainer: React.FC<{ edit?: boolean }> = ({ edit = false }) => {
  const onSubmit = useCallback((data: unknown) => {
    console.log(data);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (edit)
      setTimeout(() => {
        setData({
          product_name: 'dfdsf',
          active: true,
          category: 'A',
          interest: ['sports', 'movie'],
        });
      }, 1000);
  }, [edit]);

  const fields = ProductAddFormConfig.properties as AddProductPropertiesType;

  return (
    <>
      <FormInitializer onSubmit={onSubmit} data={data} edit={edit}>
        <Stack gap={3}>
          <FormComponent field={fields.product_name} />
          <FormComponent field={fields.active} />
          <FormComponent field={fields.category} />
          <FormComponent field={fields.interest} />
        </Stack>
        <Button variant="contained" type="submit">
          {edit ? 'Update' : 'Add'}
        </Button>
      </FormInitializer>
    </>
  );
};

export default ProductsAddContainer;
