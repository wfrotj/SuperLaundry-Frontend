import React, { useEffect } from "react";
import customerService from "../services/customerService";

function CustomerList({ customers, setCustomers }) {
  useEffect(() => {
    customerService.getCustomers().then((res) => {
      setCustomers(res);
    });
  }, []);

  return (
    <table>
      <tbody>
        <tr>
          <td>FIRST NAME</td>
          <td>LAST NAME</td>
          <td>CONTACT NUMBER</td>
          <td>EMAIL</td>
          <td>ADDRESS</td>
          <td>JOBS/STATUS</td>
        </tr>

        {customers.map((customer) => {
          return (
            <tr key={customer.id}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.contactNumber}</td>
              <td>{customer.email}</td>
              <td>
                {customer.address.line1} {customer.address.line2}{" "}
                {customer.address.line3}
              </td>
              {customer.jobs.length > 0 ? (
                <>
                  {customer.jobs.map((job) => (
                    <td key={job.id}>
                      {job.typeOfServcie}/{job.status}
                    </td>
                  ))}
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CustomerList;
