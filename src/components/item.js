import React from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./ItemCount";

const Item =( {productos} )=> {

    const { name, price, descripcion } = productos;
    return (
        <div className="d-flex justify-content-evenly carta">
            <div>
            <Card
            className="my-2"
            style={{
            width: '18rem'
            }}>
            <CardHeader>
                {name}
            </CardHeader>
            <CardBody className="cafrta2">
                <CardTitle tag="h5">
                    {price}
                </CardTitle>
                <CardText>
                    {descripcion}
                </CardText>
                <ItemCount initial={1} stock={5}/>
            </CardBody>
        </Card>
        </div>
        </div>
    )
}


export default Item;