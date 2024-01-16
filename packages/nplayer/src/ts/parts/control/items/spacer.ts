import { $ } from 'src/ts/utils';
import type { ControlItem } from '..';

export const spacerControlItem = (): ControlItem => ({
  id: 'spacer',
  el: $('.spacer'),
});
