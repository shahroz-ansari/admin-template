import { lazy } from 'react';

const formInputMap = {
  textbox: lazy(() => import('./inputs/text-input.component')),
  checkbox: lazy(() => import('./inputs/checkbox-input.component')),
  selectbox: lazy(() => import('./inputs/select-input.component')),
  multiselectbox: lazy(() => import('./inputs/multi-select-input.component')),
};

export default formInputMap;
