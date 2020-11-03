export default (state = 0, actions) => {

    switch (actions.type) {
        case 'Create':

            return state + 1

        case 'Maines':

            if (!state == 0) {

                return state - 1

            }
        default:
            return state
    }

}