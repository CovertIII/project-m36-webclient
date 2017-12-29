export const viewRelation = name => ({
  type: 'ROUTE_PATCH',
  payload: {
    type: 'relation',
    name
  }
});

export const viewType = name => ({
  type: 'ROUTE_PATCH',
  payload: {
    type: 'type',
    name
  }
});

export const switchTab = tab => ({
  type: 'ROUTE_PATCH',
  payload: {
    tab
  }
});
