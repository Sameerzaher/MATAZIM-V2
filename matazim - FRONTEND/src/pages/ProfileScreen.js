import React, {useEffect, useState} from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
const axios = require('axios');
class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user_id:this.props.user_id,
            username:this.props.username,
            email:this.props.email,
            profileImage:this.props.profileImage,
            msg:this.props.msg,
            uploadedFile:null
        }
    }
    fetchUserDetails=(user_id)=>{
        //console.log(user_id);
        axios.get("http://127.0.0.1:8000/main/users/"+user_id,{
            headers: {
                "content-type": "application/json"
              }
        }).then(res=>{
            console.log(res);
            this.setState({email:res.data.results[0].email});
            this.setState({profileImage:res.data.results[0].profileImage})
        })
        .catch(err=>console.log(err))
    }
    render(){
        return (
            <Container>
            <Row>
           
            <Col>
                <h1>User Profile</h1>
                <Form className="form">     
        <p>{this.state.msg}</p>

       
       

      <Form.Group controlId="formCategory1">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" defaultValue={this.state.username}/>
      
      </Form.Group>
      <Form.Group controlId="formCategory2">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" defaultValue={this.state.email} />
      
      </Form.Group>
     
      <Form.Group controlId="formCategory3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstname" onChange={this.changefirstname}/>
        </Form.Group>
        <Form.Group controlId="formCategory4">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastname" onChange={this.changelastname}/>
        </Form.Group>
        <Form.Group controlId="formCategory5">
        <Form.Label>Skills</Form.Label>
        <Form.Control type="text" name="skills" onChange={this.changeskills}/>
        </Form.Group>
      <Button variant="primary" onClick={this.UpdateProfileHandler}>Update Profile</Button>
      </Form>
       </Col>
    
           </Row>
            </Container>
        )

    }
    

}

export default ProfileScreen;