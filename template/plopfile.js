module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
        validate: value => {
          if (!value) {
            return 'Component name is required'
          }
          return true
        },
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'app/components/{{dashCase name}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'blade-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'app/components/index.js',
        templateFile: 'blade-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'app/components/index.js',
        // Pattern tells plop where in the file to inject the template
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{dashCase name}}'",
      },
      {
        type: 'append',
        path: 'app/components/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '  {{pascalCase name}},',
      },
    ],
  })

  plop.setGenerator('screen', {
    description: 'Create a screen',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your screen name?',
        validate: value => {
          if (!value) {
            return 'Screen name is required'
          }
          return true
        },
      },
      {
        type: 'confirm',
        name: 'useProxy',
        message: 'Do you wanna use Proxy in Screen?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'app/screens/{{dashCase name}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'blade-templates/Screen.js.hbs',
      },
      {
        type: 'add',
        path: 'app/screens/index.js',
        templateFile: 'blade-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'app/screens/index.js',
        // Pattern tells plop where in the file to inject the template
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}}Screen from './{{dashCase name}}'",
      },
      {
        type: 'append',
        path: 'app/screens/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '  {{pascalCase name}}Screen,',
      },
    ],
  })

  plop.setGenerator('navigator', {
    description: 'Create a navigator',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your navigator name?',
        validate: value => {
          if (!value) {
            return 'Navigator name is required'
          }
          return true
        },
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'app/navigators/{{dashCase name}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'blade-templates/Navigator.js.hbs',
      },
      {
        type: 'add',
        path: 'app/navigators/index.js',
        templateFile: 'blade-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'app/navigators/index.js',
        // Pattern tells plop where in the file to inject the template
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{dashCase name}}'",
      },
      {
        type: 'append',
        path: 'app/navigators/index.js',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '  {{pascalCase name}},',
      },
    ],
  })
  plop.setGenerator('proxy', {
    description: 'Create a proxy',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your proxy name?',
        validate: value => {
          if (!value) {
            return 'Proxy name is required'
          }
          return true
        },
      },
      {
        type: 'confirm',
        name: 'usePersist',
        message: 'Do you wanna use persist with AsyncStorage?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'app/proxies/{{dashCase name}}/index.js',
        // Handlebars template used to generate content of new file
        templateFile: 'blade-templates/proxy/index.js.hbs',
      },
      {
        type: 'add',
        path: 'app/proxies/index.js',
        templateFile: 'blade-templates/proxy/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'app/proxies/index.js',
        // Pattern tells plop where in the file to inject the template
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: "export * from './{{dashCase name}}'",
      },
    ],
  })
}
