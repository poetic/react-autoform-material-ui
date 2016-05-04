import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

export default function () {
  checkNpmVersions({
    react: '15.x.x',
    'react-dom': '15.x.x',
    'material-ui': '0.15.0-beta.2',
  }, 'poetic:react-autoform-material-ui');
}
