export default function BasicInfo() {
    return (
        <div>
            <h3>Basic Information</h3>
            <hr />
            <h5>Personal Information</h5>
            <hr />
            <div style={{ textAlign: 'left', padding: "0px 30px" }}>
                <p>First Name:</p>
                <p>Last Name: </p>
                <p>Contact Number: </p>
                <p>Gender: </p>
            </div>
            <hr />

            <hr />
            <h5>Address</h5>
            <hr />
            <div style={{ textAlign: 'left', padding: "0px 30px" }}>
                <p>Address: </p>
                <p>Delivery Address: </p>
                <p>Email Address: </p>
            </div>
        </div>
    )
}