import * as _ from 'lodash'

export const lodashToSpace = (str: string): string => {
  return _.replace(str, '_', ' ')
}
