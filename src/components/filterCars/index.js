import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars, GET_CARS } from '../../actions/carsAction'

function FilterCars() {
    const { getCarsResult, getCarsLoading, getCarsError } = useSelector((state) => state.CarsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        //Panggil action getCars
        console.log('1. use effect component did mount')
        dispatch(getCars())

    }, [dispatch])

    const [driverInput, setDriver] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [timeInput, setTimeInput] = useState('');
    const [capacityInput, setCapacityInput] = useState('');
    const dateTime = dateInput + " " + timeInput;

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    console.log(getCarsResult)
    const populateCars = getCarsResult.map(car => {
        const isPositive = getRandomInt(0, 1) === 1;
        const timeAt = new Date();
        const mutator = getRandomInt(1000000, 100000000);
        const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    
        return {
          ...car,
          availableAt,
        };
      })

    const newDateTimeFormat = new Date(`${dateInput} ${timeInput}`);
    const getEpochTime = newDateTimeFormat.getTime();

    const filterCars = populateCars.filter(car => car.capacity >= capacityInput && (car.availableAt >= getEpochTime));

    return(
        <div>
            <div className="container shadow p-3 my-5 bg-white rounded w-75">
                <form>
                    <div className="row">
                        <div className="col-lg mt-1">
                            <p>Tipe Driver</p>
                            <select className="form-select" aria-label="Default select example">
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
                                value={dateInput} 
                                onChange={(e) => setDateInput(e.target.value)}
                            />
                        </div>
                        <div className="col-lg mt-1">
                            <p>Waktu Jemput/Ambil</p>
                            <input 
                                type="time" 
                                className="form-control" 
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
                                value={capacityInput}
                                onChange={(e) => setCapacityInput(e.target.value)}
                            />
                        </div>
                        <div className="d-flex flex-column col">
                            <button 
                                id="load-btn" 
                                type="button" 
                                className="btn col-lg w-auto h-50 btn-filter-cari mb-1" onClick={filterCars}>Cari Mobil</button>
                            <button id="load-btn" type="button" className="btn btn-danger col-lg w-auto h-50 btn-filter-cari">Clear Mobil</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="container mt-4 mb-5 w-75" style={{padding: "0"}}>
                <div className="row gap-4">
                    {getCarsResult ? (
                        getCarsResult.map((cars) => {
                            return (
                                <div className="card col-lg-4 px-3 py-3" key={cars.id} style={{width: "429px"}}>
                                    <img src={require("../../assets/images/examplecar.png")} alt={cars.manufacture} />
                                    <div className="mb-3">
                                        <p className="card-text"> {cars.manufacture} / {cars.model}</p>
                                        <p className="card-text"> <b>Rp {cars.rentPerDay} / hari</b></p>
                                        <p className="card-text text-truncate" style={{height: "48px"}}> {cars.description}</p>
                                        <p className="card-text"><img src={require("../../assets/images/fi_users.png")} alt="" /> {cars.capacity}</p>
                                        <p className="card-text"><img src={require("../../assets/images/fi_settings.png")} alt="" /> {cars.transmission}</p>
                                        <p className="card-text"><img src={require("../../assets/images/fi_calendar.png")} alt="" /> Tahun {cars.year}</p>
                                    </div>
                                    <button type="button" className="btn">Pilih Mobil</button>
                                </div>
                            )
                        })
                    ) : getCarsLoading ? (
                        (
                            <p>Loading . . .</p>
                        )
                    ) : (
                        <p>{getCarsError ? getCarsError : 'Data Kosong'}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FilterCars