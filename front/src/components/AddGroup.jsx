import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState } from "react";
import axios from 'axios'
import cors from "cors"
import MultiSelect from "react-bootstrap-multiselect";

export function AddGroup() {
    /*$("element").on("event", function(){
        $.get("datos de la lista", function(newData){
            that.setState(newData);

            // to sync manually do
            that.refs.myRef.syncData();
        });
    });*/
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const submit = async () => {
        
    }

    return (
        <div className="w-full max-w-xs m-auto">
            <Card sx={{ minwitdh : 275}}>
                <CardContent>
                    <Form>
                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Members</Form.Label>
                            <MultiSelect onChange={this.handleChange} ref="myRef" data={this.state.myData} multiple/>
                        </Form.Group>

                        <Form.Group className = "bg-withe shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <Form.Label>Schedule</Form.Label>
                            <InputGroup>
                                <Button>
                                    Set Schedule
                                </Button>
                                <Form.Control
                                    type="text"
                                    readOnly
                                />
                            </InputGroup>
                        </Form.Group>

                        <Button onClick={submit} variant="primary">
                            Submit
                        </Button>
                    </Form>
                </CardContent>
            </Card>
        </div>
        
        );
}