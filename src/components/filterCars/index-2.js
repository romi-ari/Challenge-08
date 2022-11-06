import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../../actions/carsAction'
import ListCars from '../listCars'

function FilterCars() {
    const { getCarsResult, getCarsLoading, getCarsError } = useSelector((state) => state.CarsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        //Panggil action getCars
        console.log('1. use effect component did mount')
        dispatch(getCars())

    }, [dispatch])

    // const [driverInput, setDriverInput] = useState('');
    // const [dateInput, setDateInput] = useState('');
    // const [timeInput, setTimeInput] = useState('');
    // const [capacityInput, setCapacityInput] = useState('');
    // const dateTime = dateInput + " " + timeInput;

    // function getDateTimeNow() {
    //     let today = new Date();
    //     let date = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
    //     let time = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
    //     return date + " " + time + "";
    //   }
    
    //   const filterCar = async () => {
    //     if (driverInput === undefined || driverInput === "") {
    //         return(
    //             <div class="alert alert-success" role="alert">
    //                 This is a success alert—check it out!
    //             </div>
    //           );
    //     } else if (dateTime < getDateTimeNow()) {
    //       return(
    //         <div class="alert alert-success" role="alert">
    //             This is a success alert—check it out!
    //         </div>
    //       );
    //     } else if (capacityInput === undefined || capacityInput === "") {
    //       return dispatch(getCars);
    //     } else {
    //       return dispatch(getCars);
    //     }
    //   };

    // const getRandomInt = (min, max) => {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //   }
    // console.log(getCarsResult)
    // const populateCars = getCarsResult.map(car => {
    //     const isPositive = getRandomInt(0, 1) === 1;
    //     const timeAt = new Date();
    //     const mutator = getRandomInt(1000000, 100000000);
    //     const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    
    //     return {
    //       ...car,
    //       availableAt,
    //     };
    //   })

    // const newDateTimeFormat = new Date(`${dateInput} ${timeInput}`);
    // const getEpochTime = newDateTimeFormat.getTime();

    // const filterCars = populateCars.filter(car => car.capacity >= capacityInput && (car.availableAt >= getEpochTime));

    return(
        <div>
            <div className="container shadow p-3 my-5 bg-white rounded w-75">
                <form>
                    <div className="row">
                        <div className="col-lg mt-1">
                            <p>Tipe Driver</p>
                            <select className="form-select" aria-label="Default select example" name="tipeDriver" value={driverInput} onChange={(e) => setDriverInput(e.target.value)}>
                                <option hidden>Pilih Tipe Driver</option>
                                <option>Dengan Sopir</option>
                                <option>Tanpa Sopir(Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="col-lg mt-1">
                            <p>Tanggal</p>
                            <input 
                                type="date" 
                                className="form-control" 
                                name="tanggal"
                                value={dateInput} 
                                onChange={(e) => setDateInput(e.target.value)}
                            />
                        </div>
                        <div className="col-lg mt-1">
                            <p>Waktu Jemput/Ambil</p>
                            <input 
                                type="time" 
                                className="form-control"
                                name="waktu"
                                value={timeInput}
                                onChange={(e) => setTimeInput(e.target.value)}
                            />
                        </div>
                        <div className="col-lg mt-1">
                            <p>Jumlah Penumpang (optional)</p>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Jumlah Penumpang"
                                name="jumlahPenumpang" 
                                value={capacityInput}
                                onChange={(e) => setCapacityInput(e.target.value)}
                            />
                        </div>
                        <div className="d-flex flex-column col">
                            <button id="load-btn" type="button" className="btn col-lg w-auto h-50 btn-filter-cari mb-1" onClick=''>Cari Mobil</button>
                            <button id="load-btn" type="button" className="btn btn-danger col-lg w-auto h-50 btn-filter-cari">Clear Mobil</button>
                        </div>
                    </div>
                </form>
            </div>
            <ListCars submit={this.handleSubmit} data={this.data} jumlahPenumpang={this.state.jumlahpenumpang} tipeDriver={this.state.tipedriver} tanggal={this.state.tanggal} waktu={this.state.waktu}/>
        </div>
    )
}

export default FilterCars
