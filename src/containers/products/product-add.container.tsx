import { Button, Stack } from '@mui/material';
import { useCallback } from 'react';
import FormInitializer from '../../applications/form/initializer.form';
import FormCheckboxField from '../../applications/form/inputs/checkbox-input.component';
import FormMultiSelectField from '../../applications/form/inputs/multi-select-input.component';
import FormSelectField from '../../applications/form/inputs/select-input.component';
import FormTextField from '../../applications/form/inputs/text-input.component';
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
          <FormTextField field={fields.product_name} />
          <FormCheckboxField field={fields.active} />
          <FormSelectField field={fields.category} />
          <FormMultiSelectField field={fields.interest} />
        </Stack>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </FormInitializer>
    </>
  );
};

export default ProductsAddContainer;
