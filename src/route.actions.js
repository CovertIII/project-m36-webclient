export const viewRelation = name => ({
  type: 'ROUTE_PATCH',
  payload: {
    type: 'relation',
    name,
    tab: 'header'
  }
});
