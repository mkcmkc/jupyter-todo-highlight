import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the todo_highlight extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'todo_highlight:plugin',
  description: 'A JupyterLab extension for highlighting TODOs.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension todo_highlight is activated!');
  }
};

export default plugin;
