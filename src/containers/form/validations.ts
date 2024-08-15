import { ValidationFunctionsMap } from '../../models/form.model';

export const validations: ValidationFunctionsMap = {
  required: async (value, options) => {
    return value ? '' : options.message;
  },
};
