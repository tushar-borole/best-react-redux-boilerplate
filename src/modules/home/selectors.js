import get from 'lodash.get'

export const defaultData = state => get(state, 'homeReducer.githubData')
