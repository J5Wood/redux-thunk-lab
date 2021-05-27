export const fetchCats = () => {
    return dispatch => {
        dispatch({type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(resp => resp.json())
        .then(respJson => dispatch({type: 'ADD_CATS', cats: respJson.images }))
    }
}