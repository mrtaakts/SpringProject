import React, {Component} from 'react';
import axios from 'axios'
import İletisimBilgileri from './İletisimBilgileri'
import ÖzelBilgiler from './ÖzelBilgiler'

class Cv extends Component{

    constructor(props) {  
        super(props)  
        this.state = {
            volkan:[]
        }
      } 
    componentDidMount(){ // didmount ilk yüklendiginde get olacak veriyi ayarlamaya yarayan function
        axios.get("http://localhost:8443/fake/getAll").then(response=> this.setState({volkan:response.data}))
        .catch(er=> console.log(er))
    }
   
 




    render(){
       
        
        return(
            <div>
                
                <İletisimBilgileri/>
                <ÖzelBilgiler/>
            </div>
        )
    }
}
export  default  Cv;