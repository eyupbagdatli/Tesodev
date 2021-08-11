import React from 'react';
import { Link } from 'react-router-dom';
import { List, Segment, Button } from 'semantic-ui-react'


function Card({ person }) {

    return (

        <Segment >

            <Button

                color='white'>
                <Link

                    to={{
                        pathname: `/details/${person.id}`,
                        state: { persons: person }

                    }}>


                    <List divided relaxed>

                        <List.Item>
                            <List.Header>
                                {person.name}</List.Header>
                        </List.Item>

                        <List.Item>
                            <List.Icon name='mail' />
                            <List.Content>{person.mail}</List.Content>
                        </List.Item>
                        <List.Item >
                            <List.Icon name='marker' display="flex" />
                            <List.Content >{person.country}</List.Content>
                        </List.Item>
                        <List.Item >
                            <List.Icon name='marker' display="flex" />
                            <List.Content >{person.date}</List.Content>
                        </List.Item>
                    </List>
                </Link>
            </Button >

        </Segment >


    );
}
export default Card;
