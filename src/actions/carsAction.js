import axios from 'axios'

export const GET_CARS = "GET_CARS"

export const getCars = () => {
    console.log('2. Masuk Action')
    return (dispatch) => {
        //Loading
        dispatch({
            type: GET_CARS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })
        //Get API
        axios({
            method: 'Get',
            url: 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json',
            timeout: 120000
        })
            .then((response) => {
                //Berhasil get API
                console.log('3. Berhasil dapat data : ', response.data)
                dispatch({
                    type: GET_CARS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                //Gagal get API
                console.log('3. Gagal dapat data : ', error)
                dispatch({
                    type: GET_CARS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}