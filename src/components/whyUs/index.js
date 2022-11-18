/* eslint-disable */
function WhyUs() {
    return(
        <div className="container why-us" id="why-us">
            <h1 className="w-center">Why Us?</h1>
            <p className="w-center">Mengapa harus pilih Binar Car Rental?</p>
            <div className="row gp">
                <div className="col-lg col-md w-pd">
                    <div className="card card-why">
                        <div className="card-body card-why">
                            <img src={require("../../assets/images/Ellipse 6.png")} alt=""/>
                            <h5 className="card-title">Mobil lengkap</h5>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-md w-pd">
                    <div className="card card-why">
                        <div className="card-body card-why">
                            <img src={require("../../assets/images/icon_price.png")} alt=""/>
                            <h5 className="card-title">Harga Murah</h5>
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-md w-pd">
                    <div className="card card-why">
                        <div className="card-body card-why">
                            <img src={require("../../assets/images/icon_24hrs.png")} alt=""/>
                            <h5 className="card-title">Layanan 24 jam</h5>
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg col-md w-pd">
                    <div className="card card-why">
                        <div className="card-body card-why">
                            <img src={require("../../assets/images/icon_professional.png")} alt=""/>
                            <h5 className="card-title">Sopir Profesional</h5>
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs