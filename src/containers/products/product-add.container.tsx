import { Button, Stack } from '@mui/material';
import { useCallback } from 'react';
import { FormComponent } from '../../applications/form/component.form';
import FormInitializer from '../../applications/form/initializer.form';
import ProductAddFormConfig from './product-add.form.json';

type AddProductPropertiesType = typeof ProductAddFormConfig.properties;

const ProductsAddContainer: React.FC = () => {
  const onSubmit = useCallback((data: unknown) => {
    console.log(data);
  }, []);

  const fields = ProductAddFormConfig.properties as AddProductPropertiesType;

  return (
    <>
      <FormInitializer onSubmit={onSubmit}>
        <Stack gap={3}>
          <FormComponent field={fields.product_name} />
          <FormComponent field={fields.active} />
          <FormComponent field={fields.category} />
          <FormComponent field={fields.interest} />
        </Stack>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </FormInitializer>
    </>
  );
};

export default ProductsAddContainer;
