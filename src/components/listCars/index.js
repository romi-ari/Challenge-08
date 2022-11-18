/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCars } from '../../actions/carsAction'

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDateTime(hasil) {
    const isPositive = getRandomInt(0, 1) === 1;
    const timeAt = new Date();
    const mutator = getRandomInt(1000000, 100000000);
    hasil = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))
    return hasil
}

function ListCars ({submit, data, jumlahpenumpang, tipedriver, tanggal, waktu}) {

    const { getCarsResult, getCarsLoading, getCarsError } = useSelector((state) => state.CarsReducer)
    const dispatch = useDispatch()
    
    const jumlah = jumlahpenumpang;
    const tipe = tipedriver === 'true' ? true : false
    let d = (`${tanggal}T${waktu}`);
    // console.log(d); 
    let formdate = Date.parse(d);

    console.log(Date.parse(tanggal));

    console.log(typeof(formdate));

    useEffect(() =>{
        //panggil action getListKontak
        console.log("1. use effect component did mount");
        dispatch(getCars())

    },[dispatch])

    return (
        <div className="container mt-4 mb-5 w-75" style={{padding: "0"}}>
        <div className="row gap-4">
        {getCarsResult ? (
                getCarsResult.filter((cars) => cars.capacity >= jumlah && cars.available === tipe && Date.parse(getDateTime(cars.availableAt)) > formdate
                ).map((cars) => {
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
    )
}

export default ListCars