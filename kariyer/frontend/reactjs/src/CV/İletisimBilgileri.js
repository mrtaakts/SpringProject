import React, {Component} from 'react';
import axios from 'axios'
import styles from './İletisimBilgileri.css';
class Cv extends Component{

    constructor(props) {  
        super(props)  
        this.state = {
           
        }
      } 
    componentDidMount(){ // didmount ilk yüklendiginde get olacak veriyi ayarlamaya yarayan function
        axios.get("http://localhost:8443").then(response=> this.setState({volkan:response.data}))
        .catch(er=> console.log(er))
    }
   
 btnfunction= (id)=>{
    axios.get("http://localhost:8443/fake/getAll/"+id).then(response=> this.setState({volkan:response.data}))
    .catch(er=> console.log(er))
    
    //axios.post("http://localhost:8443/fake/getAll/",obje).then()
 }





    render(){
      
        return(
            <div className="card">
            <div className="card-header">
             İletişim Bilgileri
            </div>
            <div className="card-body">
              <h5 className="card-title">İletişim Bilgileri</h5>
                <form>
                    <div className="form-group">
                        <div className="container">
                         <div className="row">
                           
                                <div className="col-sm">
                                    <label>İsim</label>
                                    <input placeholder='İsim' type="text" className="form-control">
                                    </input>
                                </div>
                                <div className="col-sm">
                                <label>Soyisim</label>
                                <input placeholder='Soyisim' type="text" className="form-control">
                                </input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Unvan</label>
                                    <input placeholder='Unvan' type="text" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm">
                                    <label>E-posta adresi</label>
                                    <input placeholder='E-posta Adresi' type="email" className="form-control"></input>
                                </div>
                                <div className="col-sm">
                                    <label>Doğum Tarihi</label>
                                    <input placeholder='Dogum Tarihi' type="date" className="form-control"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Telefon</label>
                                    <input placeholder='Telefon No' type="tel" className="form-control"></input>
                                </div>
                                
                            </div>

                            <div>
                            <label>Ülke</label>
                            <select placeholder='Ülke' className="form-control">
                                <option></option>
                            </select>
                            </div>

                            <div>
                            <label>Şehir</label>
                            <select placeholder='Şehir' className="form-control">
                                <option></option>
                            </select>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Web Sayfam</label>
                                    <input placeholder='Telefon No' type="tel" className="form-control"></input>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <div className="butonla">
                    
                    <a id="kaydetbtn" href="#" className="btn btn-success" type="submit">Kaydet</a>
                    <a href="#" className="btn btn-danger">Vazgeç</a>
                    </div>
                </form>
              
            </div>
          </div>
        )
    }
}
export  default  Cv;