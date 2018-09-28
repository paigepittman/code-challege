import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Test = () => (
  <Card>
    <Image src='' />
    <Card.Content>
      <Card.Header>Test</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>description</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
      </a>
    </Card.Content>
  </Card>
)

export default Test;
