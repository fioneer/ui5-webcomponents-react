const { writeFileSync } = require('fs');
const { _: Fiori3ThemingVariables } = require('@ui5/webcomponents/dist/themes/sap_fiori_3/parameters-bundle.css.json');
const PATHS = require('../../../../config/paths');
const path = require('path');

const variables = Fiori3ThemingVariables.replace(':root{', '')
  .replace(/}$/, '')
  .split(';')
  .filter((variable) => !/^--_?ui5/.test(variable))
  .map((value) => value.split(':')[0]);

let fileContent = `/* 
 * ### WARNING ### 
 * This is an autogenerated file, do not change manually. 
 * In order to recreate this file, please run 'node packages/base/scripts/cssVariables/parse.js'
 */

`;

for (const variable of variables) {
  fileContent += `export const ${variable.replace('--', '')} = 'var(${variable})';\n`;
}

writeFileSync(path.join(PATHS.packages, 'base', 'src', 'styling', 'sap_fiori_3.ts'), fileContent);
