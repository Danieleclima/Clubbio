import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import NightClubs from '../containers/NightClubs'
import HomepageCarousel from '../components/HomepageCarousel'

// import CheckBox from '../components/Checkbox'
// import NavigationBar from '../components/Navbar'


export default class Homepage extends Component {

    componentDidMount(){
        this.init()
    }

    init = () => window.FB.api('/me', {fields: 'email'}, {  access_token : 'EAAal5YGLdAIBAK4q6Rx644Y0ojnShFNK3RRDzj9ZAOjKJfZCBr1rZABtAgd5R1ZADgWZBLc0LtNOC34QbYp867l9PADihlbbDGGGvlEoOFBMjEXVZBvGTvYmbHGJZCRIDKHD0F8kVtudkGn27rSs6EA9GpcbHWjxmKG3ARQj5awTeFCSKmzY6Bd' }, function(response) {
        console.log(response);
      })

    render(){
        return(
            <React.Fragment>
                <HomepageCarousel/>
                <main>
                
                <NightClubs/>
                </main>
                {/* <footer></footer> */}
            </React.Fragment>
        )
    }
}