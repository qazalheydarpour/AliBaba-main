export default function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case "initialState":
            return [...state, ...payload];
        case 'timeFilter':
            return state.filter(flight => (flight.fromTime).split(':')[0] >= payload.from);
        case 'companyFilter':
            return (payload.filters.length === 0 || payload.filters.length === payload.category.length) ?
                 state :
                 state.filter(f => !Boolean(payload.companyFilters.indexOf(f.airline)));
        default:
            return state;
    }
}
