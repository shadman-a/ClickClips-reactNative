export const getBarbers = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/barbers")
            .then(resp => resp.json())
            .then(data => dispatch({ type: "get_barbers", payload: data }))
    }
}

