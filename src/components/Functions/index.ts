import onClick from './onClick';
import axisFormat from './axisFormat';
import labelFormat from './labelFormat';
export * from './types';

/**
 * These default functions can be supplied to the charting library.
 * They serve as a starting set of functions for basic usage.
 * When editing the functions consider extending this set, since in places
 * where in the schema the functions are not overwritten, the library will
 * try to use the default names, which are defined here.
 */
export default {
  onClick,
  axisFormat,
  labelFormat
};