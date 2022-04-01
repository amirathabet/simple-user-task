import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";

const Tables = ({ tableData }) => {
  return (
    <Row>
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            Users
          </CardTitle>
          <CardBody className="">
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {tableData &&
                  tableData.map((tdata, index) => (
                    <tr key={index} className="border-top">
                      <th scope="row">{index + 1}</th>
                      <td>{tdata.name}</td>
                      <td>{tdata.email}</td>
                      <td>{tdata.gender}</td>
                      <td>
                        {tdata.status === "inactive" ? (
                          <span className="p-2 bg-danger rounded-circle d-inline-block ms-3" />
                        ) : (
                          <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export const getStaticProps = async () => {
  const res = await fetch("https://gorest.co.in/public/v2/users");
  const json = await res.json();
  return {
    props: {
      tableData: json,
    },
  };
};
export default Tables;
