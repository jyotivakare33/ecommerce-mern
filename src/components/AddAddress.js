import { Component } from 'react';
import { Accordion, Card, Breadcrumb } from 'react-bootstrap';

class Address extends Component
{
    state = {
        Name:'' ,
        Mobile: '',
        Pincode: '',
        Locality:'',
        City:'',
        State:''
    };

    handleChange = (event) => {
        console.log('Changing value');
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    };

    addAddress = (event) => {
        //this.setState({ isOpen: false });
        event.preventDefault();
        const { Name,Mobile,Address,Pincode,Locality,City,State} = this.state;
        //const { password } = this.state;
        console.log( Name,Mobile,Address,Pincode,Locality,City,State);

        const request = new Request('api/users/me', {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': '*',
                //'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({
                Mobile:Mobile,
                address:{
                    Name:Name,
                    houseNo:Address,
                    Pincode:Pincode,
                    Locality:Locality,
                    City:City,
                    State:State}
                })
        });
        fetch(request)
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    render()
    {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/checkout">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/address" active>
                        {' '}
                        Add Address
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/payment">Payment</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Accordion defaultActiveKey="0" className="accordion">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Contact Details
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <form action="/action_page.php">
                                        <label for="lname">Name:</label>
                                        <input type="text" id="fname" name="Name" onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                        <label for="lname">Mobile Number:</label>
                                        <input type="number" id="lname" name="Mobile" onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                    </form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Address
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <form action="/action_page.php">
                                        <label for="lname">Pincode:</label>
                                        <input type="number" id="fname" name="Pincode" onChange={this.handleChange} />
                                        <br />
                                        <br />
                                        <label for="lname">Address:</label>
                                        <input type="text" id="lname" name="Address" onChange={this.handleChange} />
                                        <br />
                                        <br />
                                        <label for="lname">Locality/Town:</label>
                                        <input type="text" id="lname" name="Locality" onChange={this.handleChange} />
                                        <br />
                                        <br />
                                        <label for="lname">City:</label>
                                        <input type="text" id="lname" name="City" onChange={this.handleChange} />
                                        <br />
                                        <br />
                                        <label for="lname">State:</label>
                                        <input type="text" id="lname" name="State" onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                        <button type="submit" className="add_address" onClick={this.addAddress}>
                                            Add Address
                                        </button>
                                    </form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        );
    }
}


export default Address;
