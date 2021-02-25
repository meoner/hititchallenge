export default function (state, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {data: action.id};
    default:
      return state;
  }
}
