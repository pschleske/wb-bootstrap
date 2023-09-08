import { Card, Row, Col, Container, Button } from 'react-bootstrap';

function Value({ title, description, action }) {
  return (
    <Card className='shadow-sm h-100'>
      <Card.Body className='p-4 d-flex flex-column'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant='success' className='mt-auto'>{action}</Button>
      </Card.Body>
    </Card>
    // <div>
    //   <h2>{title}</h2>
    //   <p>{description}</p>
    //   <p>{action}</p>
    // </div>
  );
}

export default function Values({ values }) {
  return (
    <Container className='py-5'>
      <Row>
        {values.map(({ title, description, action }, index) => (
          <Col key={title}>
            <Value title={title} description={description} action={action} />
          </Col>
        ))}
      </Row>
    </Container>
    // <section>
    //   {values.map(({ title, description, action }, index) => (
    //     <Value key={index} title={title} description={description} action={action} />
    //   ))}
    // </section>
  );
}
