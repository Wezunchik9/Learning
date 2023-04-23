
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Nurse from '../images/Nurse.jpg'
import Employee from '../images/Employee.jpg'
import { Link } from 'react-router-dom';
// import axios from 'axios'
import { useEffect, useState } from 'react';
const Fakultetlar = () => {
    let [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])


    let getData = async () => {
        let response = await fetch('http://127.0.0.1:8000/fakultet/')
        let datas = await response.json()
        // console.log("DATA: ", datas)
        setData(datas)
    }
    return(
        <>


            <div>
                {
                    data.map((data, index) => (
                        <>
                            <h3 style={{color: 'grey'}} className="text-center m-5">Fakultetlar</h3>
                            <div className='text-center'>
                                <p style={{color: 'grey'}}>
                                    Tibbiyot kolleji o'z talabalariga tibbiyot, sog'liqni saqlash va sog'liqni saqlashni boshqarishning turli sohalarida bilim va ko'nikmalar bilan ta'minlaydigan keng ko'lamli o'quv dasturlarini taqdim etadi. Biz quyidagi dasturlarni taklif etamiz:
                                </p>
                            </div>
                            <div className='d-flex m-5'>
                               
                                <h3 className='text-primary' key={index}>{data.title}</h3>
                                <div className='right_line' style={{width: "1400px", marginLeft: '50px'}}></div> 
                            </div>
                            <div className='m-5'>
                                <img src={Nurse} alt="nurse-image" style={{height: "500px", width: "100%", objectFit: 'cover'}}/>
                                <p className='mt-3' style={{color: 'grey'}}  key={index}>{data.body}</p>
                            </div>
                            <div className='d-flex m-5'>
                                <h3 className='text-secondary'>MA'MURIYAT:</h3>
                                <div className='right_line' style={{width: "1400px"}}></div> 
                            </div>
                            <CardGroup className='m-5'>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text> 
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>


Abdusalim Abdusalim, [23.04.2023 16:59]
<Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>


                            <div className='d-flex m-5'>
                                <h3 className='text-primary ' key={index}>{data?.title}</h3>
                                <div className='right_line' style={{width: "1400px", marginLeft: '50px'}}></div> 
                            </div>
                            <div className='m-5'>
                                <img src={Nurse} alt="nurse-image" style={{height: "500px", width: "100%", objectFit: 'cover'}}/>
                                <p className='mt-3' style={{color: 'grey'}}> 
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nam labore! Laudantium illo ex libero soluta accusantium consequatur doloremque vel debitis odio quae obcaecati architecto tempore dolores consequuntur sapiente sunt illum, enim eos fuga. Placeat dolor libero itaque iusto voluptatibus nemo culpa, amet consectetur quibusdam maiores, aut tempora. Vel quisquam, officiis veritatis quaerat ex repellat voluptas ut corrupti tempore labore deserunt magni sit voluptatibus. Sequi eum debitis magnam sed esse, quisquam saepe. Sint corporis dicta facilis iure fuga quisquam possimus, quae adipisci. Beatae saepe perspiciatis omnis? Ea alias natus, ipsum maiores distinctio minima mollitia illum quisquam consequuntur! Quasi, exercitationem corrupti.
                                </p>
                            </div>
                            <div className='d-flex m-5'>
                                <h3 className='text-secondary'>MA'MURIYAT:</h3>
                                <div className='right_line' style={{width: "1400px"}}></div> 
                            </div>
                            <CardGroup className='m-5'>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text> 
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>


Abdusalim Abdusalim, [23.04.2023 16:59]
<p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>


                            <div className='d-flex m-5'>
                                <h3 className='text-primary'>TIBBIYOT DIAGNOSTIKA LABORATORIASI</h3>
                                <div className='right_line' style={{width: "1400px", marginLeft: '-50px'}}></div> 
                            </div>
                            <div className='m-5'>
                                <img src={Nurse} alt="nurse-image" style={{height: "500px", width: "100%", objectFit: 'cover'}}/>
                                <p className='mt-3' style={{color: 'grey'}}> 
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nam labore! Laudantium illo ex libero soluta accusantium consequatur doloremque vel debitis odio quae obcaecati architecto tempore dolores consequuntur sapiente sunt illum, enim eos fuga. Placeat dolor libero itaque iusto voluptatibus nemo culpa, amet consectetur quibusdam maiores, aut tempora. Vel quisquam, officiis veritatis quaerat ex repellat voluptas ut corrupti tempore labore deserunt magni sit voluptatibus. Sequi eum debitis magnam sed esse, quisquam saepe. Sint corporis dicta facilis iure fuga quisquam possimus, quae adipisci. Beatae saepe perspiciatis omnis? Ea alias natus, ipsum maiores distinctio minima mollitia illum quisquam consequuntur! Quasi, exercitationem corrupti.
                                </p>
                            </div>
                            <div className='d-flex m-5'>
                                <h3 className='text-secondary'>MA'MURIYAT:</h3>
                                <div className='right_line' style={{width: "1400px"}}></div> 
                            </div>
                            <CardGroup className='m-5'>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text> 
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>


Abdusalim Abdusalim, [23.04.2023 16:59]
<Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>


                            <div className='d-flex m-5'>
                                <h3 className='text-primary'>TIBBIY BOSHQARUV</h3>
                                <div className='right_line' style={{width: "1400px", marginLeft: '-50px'}}></div> 
                            </div>
                            <div className='m-5'>
                                <img src={Nurse} alt="nurse-image" style={{height: "500px", width: "100%", objectFit: 'cover'}}/>
                                <p className='mt-3' style={{color: 'grey'}}> 
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, nam labore! Laudantium illo ex libero soluta accusantium consequatur doloremque vel debitis odio quae obcaecati architecto tempore dolores consequuntur sapiente sunt illum, enim eos fuga. Placeat dolor libero itaque iusto voluptatibus nemo culpa, amet consectetur quibusdam maiores, aut tempora. Vel quisquam, officiis veritatis quaerat ex repellat voluptas ut corrupti tempore labore deserunt magni sit voluptatibus. Sequi eum debitis magnam sed esse, quisquam saepe. Sint corporis dicta facilis iure fuga quisquam possimus, quae adipisci. Beatae saepe perspiciatis omnis? Ea alias natus, ipsum maiores distinctio minima mollitia illum quisquam consequuntur! Quasi, exercitationem corrupti.
                                </p>
                            </div>
                            <div className='d-flex m-5'>
                                <h3 className='text-secondary'>MA'MURIYAT:</h3>
                                <div className='right_line' style={{width: "1400px"}}></div> 
                            </div>
                            <CardGroup className='m-5'>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text> 
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>


Abdusalim Abdusalim, [23.04.2023 16:59]
</Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src={Employee} />
                                    <Card.Body>
                                    <Card.Title>Felicia Smoak</Card.Title>
                                    <Card.Text>
                                        <p style={{fontWeight: 'bold'}}>Qabul Vaqti: <span style={{color: 'grey'}}>Dushanba-Juma (14:00-16:30 gacha)</span></p>
                                        <p style={{fontWeight: 'bold'}}>Telefon: <span style={{color: 'grey'}}>+99 XXXX 123-34-56</span></p>
                                        <p style={{fontWeight: 'bold'}}>Email: <Link to="https://mail.google.com">somethin@mail.com</Link></p>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardGroup>


                            <p className='text-center m-5 text-secondary'>
                                Shuningdek, tibbiyot sohasida o‘z dunyoqarashini kengaytirish va qo‘shimcha bilim va ko‘nikmalarga ega bo‘lishni xohlovchi talabalar uchun qo‘shimcha kurslar va treninglar taklif etamiz. Bizning o'quv dasturlarimiz sizga yuqori sifatli tibbiy ta'lim olish imkonini beradi va sizni tibbiyot sohasida muvaffaqiyatli martaba uchun tayyorlaydi.
                            </p>
                        </>
                    ))
                } 
                
            </div>
        </>
    )
}


export default Fakultetlar



