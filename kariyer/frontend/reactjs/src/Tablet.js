import React, {Component} from 'react';
import axios from 'axios'
class Tablet extends Component{

    constructor(props) {  
        super(props)  
        this.state = {
            volkan:[]   
        }
      } 
    componentDidMount(){
        axios.get("http://localhost:8443/fake/getAll").then(response=> this.setState({volkan:response.data}))
        .catch(er=> console.log(er))
    }
   
 btnfunction= (id)=>{
    axios.get("http://localhost:8443/fake/getAll/"+id).then(response=> this.setState({volkan:response.data}))
    .catch(er=> console.log(er))
    
    //axios.post("http://localhost:8443/fake/getAll/",obje).then()
 }

    render(){
        let x = this.state.volkan.map(mert=> {
            return(
            <tr>
            <th scope="col">#</th>
        <th scope="col">{mert.name}</th>
            <th scope="col">{mert.surName}</th>
            <th scope="col">{mert.experince}</th>
        </tr>)
        }
        )
        
        return(
            <div>
                
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    {x}
                    </tbody>
                </table>
            </div>
        )
    }
}
export  default  Tablet;