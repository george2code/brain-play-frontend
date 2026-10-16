export default function configureGenerators(plop) {
  const validate = (value) =>
    /^[A-Za-z][A-Za-z0-9-]*$/.test(value) ||
    'Use letters, digits and hyphens; start with a letter.';
  plop.setGenerator('component', {
    description: 'Typed React component (server by default)',
    prompts: [
      { type: 'input', name: 'name', message: 'Component name', validate },
      {
        type: 'list',
        name: 'area',
        message: 'Component area',
        choices: ['games', 'layouts', 'profile', 'shared'],
      },
      {
        type: 'confirm',
        name: 'client',
        message: 'Needs browser state or event handlers?',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{area}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('service', {
    description: 'API service using the shared public Axios client',
    prompts: [
      { type: 'input', name: 'name', message: 'Service name', validate },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/{{kebabCase name}}.service.ts',
        templateFile: 'plop-templates/service.ts.hbs',
      },
    ],
  });
}
