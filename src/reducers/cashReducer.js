const defState = {
	cash: 0
}

export const cashReducer = (state = defState, action) => {
  	switch(action.type){
		case 'ADD_CASH':
			return {
				cash: state.cash + action.payload
			}
		case 'GET_CASH':
			return {
				cash: state.cash - action.payload
			}
		default: 
			return state
	}
}