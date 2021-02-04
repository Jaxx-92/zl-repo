/* eslint-disable no-param-reassign */
import path from 'path';
import envVars from 'preact-cli-plugin-env-vars';

export default (config, env, helpers) => {
  config.resolve.alias.Components = path.resolve(__dirname, 'src/components');
  config.resolve.alias.Cards = path.resolve(__dirname, 'src/routes/habitat/components/CardTabs/cards');
  config.resolve.alias.Assets = path.resolve(__dirname, 'src/assets');
  config.resolve.alias.Shared = path.resolve(__dirname, 'src/shared');

  envVars(config, env, helpers);
};
