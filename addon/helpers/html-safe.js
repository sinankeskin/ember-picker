import { htmlSafe } from '@ember/template';
import { helper } from '@ember/component/helper';

export default helper((str) => {
  return htmlSafe(str);
});
