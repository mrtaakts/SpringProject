import React, {Component} from 'react';
import axios from 'axios'
import styles from './ÖzelBilgiler.css';
class Cv extends Component{

    constructor(props) {
        super(props)
        this.state = {
             userData: {
                 gender:1,
                 driverLicense:"A",
                 salaryExpectation:"1000",
                 salaryExpectationDate:"10.10.1968"
            }

        }
      }

    function AddCustomer(){
        const submit=()=>{
            let gender = e.target[0].value;
            let dob = e.target[1].value;
            let creditlimit = e.target[2].value;
        }
        let data = {
            gender, dob,creditlimit
        }
        console.log(data)
    };
    componentDidMount(){ // didmount ilk yüklendiginde get olacak veriyi ayarlamaya yarayan function
        let userData;
        userData =this.state.userData
        axios.post('https://localhost:8443/cv/ozel', userData)
            .then(res => {
                let responseData;
                responseData = res.data
                if (responseData.status == 'success') {
                    const user = responseData.user
                } else {
                    alert('Something went wrong while creating account')
                }
            })

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
             Özel Bilgiler
            </div>
            <div className="card-body">
              <h5 className="card-title">Özel Bilgiler</h5>
                <form onSubmit={e =>{
                    e.preventDefault();
                    submit(e);
                }}>
                    <div className="form-group">
                        <div className="container">
                         <div className="row">
                            <div className="col-sm-6">
                                <div className="col-sm-3">
                                    <label>Cinsiyet </label>
                                    </div>
                                    <div className="form check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                        <label className="form-check-label" name="inlineRadioOptions" id="inlineRadio2" value="option2">Erkek</label>
                                    </div>
                                    <div className="form check form-check-inline">
                                        <input className="form-check-input" type="radio"></input>
                                        <label className="form-check-label">Kadın</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                            <label>Sürücü Belgesi Sınıfı</label>
                            <select placeholder='Sürücü Belgesi' className="form-control">
                                <option></option>
                            </select>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                            <label>Uyruk</label>
                            <select placeholder='Uyruk' className="form-control">
                                <option></option>
                            </select>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                            <label>Net Maaş Beklentisi</label>
                            <select placeholder='Net Maaş' className="form-control">
                                <option></option>
                            </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Askerlik Durumu</label>
                                    <select placeholder='Askerlik Durumu' className="form-control">
                                <option></option>
                            </select>
                                </div>
                                
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <label>Tecil Tarihi</label>
                                    <input placeholder='Tecil Tarihi' type="date" className="form-control"></input>                                                                    </div>
                                
                            </div>
                            <div className="row">
                                <div id="engellabel">
                                    <label >Engelliyseniz lütfen bunu belirtin. Böylece size sağlanan ayrıcalıklı istihdam olanaklarından faydalanabilirsiniz.</label>
                                </div>

                               
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    
                                </input>
                                <label className="form-check-label" for="defaultCheck1">
                                    Engelliyim
                                </label>
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