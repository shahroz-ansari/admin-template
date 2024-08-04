interface FormConfig {
  name: string;
  properties: {
    [key: string]: {
      name: string;
      value: any;
      type: string;
      label: string;
    };
  };
}
