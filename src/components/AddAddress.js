import { Accordion, Card, Breadcrumb } from 'react-bootstrap';

function AddAddress() {
    return (
        <div>
            <Breadcrumb ClassName="breadcrumb">
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
                                    <input type="text" id="fname" name="fname" />
                                    <br />
                                    <br />
                                    <label for="lname">Mobile Number:</label>
                                    <input type="number" id="lname" name="lname" />
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
                                    <input type="number" id="fname" name="fname" />
                                    <br />
                                    <br />
                                    <label for="lname">Address:</label>
                                    <input type="text" id="lname" name="lname" />
                                    <br />
                                    <br />
                                    <label for="lname">Locality/Town:</label>
                                    <input type="text" id="lname" name="lname" />
                                    <br />
                                    <br />
                                    <label for="lname">City:</label>
                                    <input type="text" id="lname" name="lname" />
                                    <br />
                                    <br />
                                    <label for="lname">State:</label>
                                    <input type="text" id="lname" name="lname" />
                                    <br />
                                    <br />
                                    <button type="submit" className="add_address">
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

export default AddAddress;
