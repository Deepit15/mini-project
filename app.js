var mysql = require('mysql');
const express = require("express");
var app = express();
var multer = require("multer");
const bodyparser = require("body-parser");

let cors = require("cors");
app.use(cors());
app.use(bodyparser.json());

var connection = mysql.createConnection({
  host     : "covid-19.czlajiglwua0.us-east-1.rds.amazonaws.com",
  user     : "admin",
  password : "password",
  database: "bug_tracking",
  port     : 3306,
  multipleStatements: true
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

app.listen(3000, () =>
  console.log("Express server is running at port no : 3000")
);

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.get("/cus_details", (req, res) => {
    connection.query("SELECT * FROM cus_details", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });

  app.get("/customer/:id", (req, res) => {
    connection.query(
      "SELECT * FROM cus_details WHERE id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });

  app.post("/cus_detailsinsert", (req, res) => {
    console.log(req);
    let cus = req.body.customer;
    connection.query(
      "insert into cus_details(name,email,phone_no,address) values('" +
      cus.name +
        "','" +
        cus.email +
        "'," +
        cus.phone_no +
        ",'" +
        cus.address +
        "');",
      (err, rows, fields) => {
        if (!err) res.send("Inserted successfully");
        else console.log(err);
      }
    );
  });

  app.post("/cus_detailsdelete", (req, res) => {
    let cus = req.body.customer;
    connection.query(
      "DELETE FROM cus_details WHERE id = " + cus.id,
      (err, rows, fields) => {
        if (!err) res.send("Deleted successfully.");
        else console.log(err);
      }
    );
  });
  
  app.post("/cus_detailsupdate", (req, res) => {
    let cus = req.body.customer;
    connection.query(
      "update cus_details set name= '" +
        cus.name +
        "' , email = '" +
        cus.email +
        "', phone_no=" +
        cus.phone_no +
        ", address='" +
        cus.address +
        "' where id = " +
        cus.id +
        ";",
      (err, rows, fields) => {
        if (!err) res.send("Updated successfully");
        else console.log(err);
      }
    );
  });

  app.get("/user", (req, res) => {
    connection.query("SELECT * FROM user", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });

  app.post("/userinsert", (req, res) => {
    console.log(req);
    let user = req.body.user;
    connection.query(
      "insert into user(login_id,pass,user_type) values(" +
      user.login_id +
        ",'" +
        user.pass +
        "','" +
        user.user_type +
        "');",
      (err, rows, fields) => {
        if (!err) res.send("Inserted successfully");
        else console.log(err);
      }
    );
  });

  app.post("/userdelete", (req, res) => {
    let user = req.body.user;
    connection.query(
      "DELETE FROM user WHERE id = " + user.id,
      (err, rows, fields) => {
        if (!err) res.send("Deleted successfully.");
        else console.log(err);
      }
    );
  });
  
  app.post("/userupdate", (req, res) => {
    let user = req.body.user;
    connection.query(
      "update user set name= '" +
        user.login_id +
        "' , pass = '" +
        user.pass +
        "', user_type ='" +
        user.user_type  +
        "' where id = " +
        user.id +
        ";",
      (err, rows, fields) => {
        if (!err) res.send("Updated successfully");
        else console.log(err);
      }
    );
  });

  app.get("/emp_details", (req, res) => {
    connection.query("SELECT * FROM emp_details", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });

  app.get("/employee/:id", (req, res) => {
    connection.query(
      "SELECT * FROM emp_details WHERE id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });

  app.post("/emp_detailsinsert", (req, res) => {
    console.log(req);
    let emp = req.body.employee;
    connection.query(
      "insert into emp_details(name,email,phone_no,address,govt_id) values('" +
      emp.name +
        "','" +
        emp.email +
        "'," +
        emp.phone_no +
        ",'"+
        emp.address+
        "',"+emp.govt_id+
        ");",
      (err, rows, fields) => {
        if (!err) res.send("Inserted successfully");
        else console.log(err);
      }
    );
  });

  app.post("/emp_detailsdelete", (req, res) => {
    let emp = req.body.employee;
    connection.query(
      "DELETE FROM emp_details WHERE id = " + emp.emp_id,
      (err, rows, fields) => {
        if (!err) res.send("Deleted successfully.");
        else console.log(err);
      }
    );
  });
  
  app.post("/emp_detailsupdate", (req, res) => {
    let emp = req.body.employee;
    connection.query(
      "update emp_details set name= '" +
        emp.name +
        "' , email = '" +
        emp.email +
        "', phone_no =" +
        emp.phone_no  +
        ",address='"+
        emp.address+
        "',govt_id='"+
        emp.govt_id+
        "' where id = " +
        emp.id +
        ";",
      (err, rows, fields) => {
        if (!err) res.send("Updated successfully");
        else console.log(err);
      }
    );
  });

  app.get("/bugs", (req, res) => {
    connection.query("SELECT * FROM bugs", (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    });
  });

  app.get("/bugs/:id", (req, res) => {
    connection.query(
      "SELECT * FROM bugs WHERE id = ?",
      [req.params.id],
      (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
      }
    );
  });

  app.post("/bugsinsert", (req, res) => {
    console.log(req);
    let bugs = req.body.bugs;
    connection.query(
      "insert into bugs(problem,description,date_time,ss_name,status) values('" +
        bugs.problem +
        "','" +
        bugs.description +
        "','" +
        bugs.date_time +
        "','" +
        bugs.ss_name +
        "','"+
        bugs.status +
        "');",
      (err, rows, fields) => {
        if (!err) res.send("Inserted successfully");
        else console.log(err);
      }
    );
  });

  app.post("/bugsdelete", (req, res) => {
    let bugs = req.body.bugs;
    connection.query(
      "DELETE FROM bugs WHERE id = " + bugs.id,
      (err, rows, fields) => {
        if (!err) res.send("Deleted successfully.");
        else console.log(err);
      }
    );
  });
  
  app.post("/bugsupdate", (req, res) => {
    let bug = req.body.bugs;
    console.log(bug);
    connection.query(
      "update bugs set problem= '" +
        bug.problem +
        "' , description = '" +
        bug.description +
        "', date_time ='" +
        bug.date_time  +
        "',comment='"+
        bug.comment+
        "',status='"+
        bug.status+
        "' where id = " +
        bug.id +
        ";",
      (err, rows, fields) => {
        if (!err) res.send("Updated successfully");
        else console.log(err);
      }
    );
  });

// connection.end();