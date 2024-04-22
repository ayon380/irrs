import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, subject, ticket,username } = await request.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "connectonmuse@gmail.com",
      pass: "trov tcct pktt gjmq",
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  // Compose email options
  const htmlTemplate = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Train Ticket Confirmation - IRRS</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f7f9fc; /* Light background */
      }
      .container {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
        border-radius: 10px; /* Rounded corners */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
        animation: slide-in 0.5s ease-in-out forwards; /* Basic slide-in animation */
      }
      @keyframes slide-in {
        from {
          transform: translateY(20px);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      .header {
        background-color: #f0984b; /* Light orange header */
        color: #fff;
        padding: 15px 20px;
        text-align: center;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .logo {
        width: 100px;
        height: auto;
      }
      .content {
        padding: 20px;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #333; /* Darker text for better contrast */
      }
      .info {
        margin-bottom: 5px;
        color: #777; /* Lighter text for less important info */
      }
      .info span:first-child {
        font-weight: bold;
        margin-right: 10px;
      }
      .table {
        width: 100%;
        border-collapse: collapse;
        border-radius: 5px; /* Rounded corners for table */
      }
      .table th, .table td {
        padding: 5px;
        border: 1px solid #ddd;
        text-align: left;
      }
      .table th {
        background-color: #e9ecef; /* Lighter background for table headers */
      }
      .passenger {
        margin-top: 20px;
      }
      .passenger-title {
        font-weight: bold;
        margin-bottom: 5px;
        color: #333;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header class="header">
       IRRS
        <h1>Train Ticket Confirmation</h1>
      </header>
      <div class="content">
        <p class="title">Dear ${username},</p>
        <p>This email confirms your train reservation on the ${
          ticket.TrainName
        } (Train No: ${ticket.TrainNo}) departing on ${ticket.Doj}</p>
        <div class="info">
          <span>PNR:</span> ${ticket.Pnr}
        </div>
        <table class="table">
          <tr>
            <th>Travel Details</th>
            <th></th>
          </tr>
          <tr>
            <td>Train Name</td>
            <td>${ticket.TrainName}</td>
          </tr>
          <tr>
            <td>Train No</td>
            <td>${ticket.TrainNo}</td>
          </tr>
          <tr>
            <td>Date of Journey</td>
            <td>${ticket.Doj}</td>
          </tr>
          <tr>
            <td>Departure Time</td>
            <td>${ticket.DepartureTime}</td>
          <tr>
            <td>Arrival Time</td>
            <td>${ticket.ArrivalTime}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>${ticket.Duration}</td>
          </tr>
          <tr>
            <td>From</td>
            <td>${ticket.From}</td>
          </tr>
          <tr>
            <td>To</td>
            <td>${ticket.To}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td>${ticket.Class}</td>
          </tr>
          <tr>
            <td>Booking Fare</td>
            <td>₹ ${ticket.BookingFare}</td>
          </tr>
        </table>
  
        <div class="passenger">
          <h3 class="passenger-title">Passenger Details</h3>
          <table class="table">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
              <th>Seat No.</th>
              <th>Coach No.</th>
              <th>Berth</th>
             
            </tr>
           
            
             
            ${ticket.PassengerStatus.map(
              (passenger) => `
              <tr>
              <td>${passenger.name}</td>
              <td>${passenger.age}</td>
              <td>CNF</td>
              <td>${passenger.Berth}</td>
              <td>${passenger.Coach}</td>
              <td>${passenger.BookingBerthCode}</td>
              
            </tr>
              `
            )}
            
          
          </table>
        </div>
  
        <p>**Important Notes:**</p>
        <ul>
          <li>Please carry a valid photo ID proof along with this confirmation email during your journey.</li>
          <li>For any inquiries, please contact the railway helpline or visit the official website.</li>
        </ul>
        <p>We wish you a pleasant journey!</p>
        <p>Sincerely,</p>
        <p>IRRS</p>
      </div>
    </div>
  </body>
  </html>
  
  `;

  let mailOptions = {
    from: "connectirrs@gmail.com",
    to: email,
    subject: subject,
    html: htmlTemplate,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  return new NextResponse(JSON.stringify({ status: "OK" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
