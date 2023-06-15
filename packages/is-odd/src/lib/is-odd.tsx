import { BaseFunction } from '@xylink/is-even';
import { isOdd } from '../utils';
import styles from './is-odd.module.css';

/* eslint-disable-next-line */
export interface IsOddProps {}

export function IsOdd(props: IsOddProps) {
  return (
    <BaseFunction text='是Odd' judge={isOdd} />
  );
}

export default IsOdd;
