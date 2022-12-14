App = {
    postemployee: async function () {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          employee: {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone_no: document.getElementById("phone").value,
            address: document.getElementById("address").value,
            govt_id: document.getElementById("govt_id").value,
          },
        });
        
        xhr.open("POST", "http://44.209.219.84:3000/emp_detailsinsert", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(dta);
        xhr.send(dta);
        alert("Record Inserted!!");
        App.getemployee();

        // fetch('http://44.209.219.84:3000/emp_detailsinsert', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     alert("Record Inserted!!");
        //     App.getemployee();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        
        $("#changedata").trigger("reset");
      },
      getemployee: function () {
        var b = "<tr><th>Employee ID</th><th>Name</th><th>Email</th><th>Phone Number</th><th>Address</th><th>Government ID</th></tr>";
        const api_url = "http://44.209.219.84:3000/emp_details";
        // console.log(api_url);
        emp.innerHTML = b;
        data = this.getapi(api_url).then((data) => {
          // console.log("y");
          for (var i = 0; i <= data.length; i++) {
            var a =
              "<tr><td scope='row'>" +
              data[i].id +
              "</td><td  scope='row'>" +
              data[i].name +
              "</td><td  scope='row'>" +
              data[i].email +
              "</td><td  scope='row'>" +
              data[i].phone_no +
              "</td><td  scope='row'>" +
              data[i].address +
              "</td><td  scope='row'>" +
              data[i].govt_id +
              "</td><td  scope='row'><span class='material-icons' onclick='App.getpatemployee(" +
              data[i].id +
              ")'>edit</span></td>" +
              "<td  scope='row'><span class='material-icons' onclick='App.rem_emp(" +
              data[i].id +
              ")'>delete</span></td></tr>";
            // console.log(data[i]);
            emp.innerHTML += a;
          }
          // console.log("a")
        });
      },
      getpatemployee: function (i) {
        var x = document.getElementById("changeRecordForm");
        const api_url = "http://44.209.219.84:3000/employee/" + i;
        // console.log(api_url);
        data = this.getapi(api_url).then((data) => {
          (x.elements[0].value = data[0].id),
            (x.elements[1].value = data[0].name),
            (x.elements[2].value = data[0].email),
            (x.elements[3].value = data[0].phone_no),
            (x.elements[4].value = data[0].address),
            (x.elements[5].value = data[0].govt_id),
            $("#changedata").modal();
        });
      },

      postupemp: function () {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          employee: {
            id: document.getElementById("remp_id").value,
            name: document.getElementById("rname").value,
            email: document.getElementById("remail").value,
            phone_no: document.getElementById("rphone").value,
            address: document.getElementById("raddress").value,
            govt_id: document.getElementById("rgovt_id").value,
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/emp_detailsupdate", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(dta);
        xhr.send(dta);
        alert("Record Updated!!");
        App.getemployee();
        // fetch('http://44.209.219.84:3000/emp_detailsupdate', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getemployee();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      },
    
      rem_emp: function (i) {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          employee: {
            emp_id: i,
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/emp_detailsdelete", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(dta);
        alert("Record Deleted!!");
        App.getemployee();
        // fetch('http://44.209.219.84:3000/emp_detailsdelete', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getemployee();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      },

      postcustomer: async function () {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          customer: {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone_no: document.getElementById("phone").value,
            address: document.getElementById("address").value,
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/cus_detailsinsert", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(dta);
        xhr.send(dta);
        alert("REcord Inserted!!");
        App.getcustomer();
        xhr.onreadystatechange= function () {
          if (xhr.readyState == 4) {
            App.getcustomer();
          }
        };
        // fetch('http://44.209.219.84:3000/cus_detailsinsert', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getcustomer();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        $("#changedata").trigger("reset");
      },

      getcustomer: function () {
        var b = "<tr><th>ID</th><th>Name</th><th>Email</th><th>Phone Number</th><th>Address</th></tr>";
        const api_url = "http://44.209.219.84:3000/cus_details";
        // console.log(api_url);
        cus.innerHTML = b;
        data = this.getapi(api_url).then((data) => {
          // console.log("y");
          for (var i = 0; i <= data.length; i++) {
            var a =
              "<tr><td scope='row'>" +
              data[i].id +
              "</td><td  scope='row'>" +
              data[i].name +
              "</td><td  scope='row'>" +
              data[i].email +
              "</td><td  scope='row'>" +
              data[i].phone_no +
              "</td><td  scope='row'>" +
              data[i].address +
              "</td><td  scope='row'><span class='material-icons' onclick='App.getpatcustomer(" +
              data[i].id +
              ")'>edit</span></td>" +
              "<td  scope='row'><span class='material-icons' onclick='App.rem_cus(" +
              data[i].id +
              ")'>delete</span></td></tr>";
            // console.log(data[i]);
            cus.innerHTML += a;
          }
          // console.log("a")
        });
      },
      getpatcustomer: function (i) {
        var x = document.getElementById("changeRecordForm");
        const api_url = "http://44.209.219.84:3000/customer/" + i;
        // console.log(api_url);
        data = this.getapi(api_url).then((data) => {
          (x.elements[0].value = data[0].id),
            (x.elements[1].value = data[0].name),
            (x.elements[2].value = data[0].email),
            (x.elements[3].value = data[0].phone_no),
            (x.elements[4].value = data[0].address),
            $("#changedata").modal();
        });
      },

      postupcus: async function () {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          customer: {
            id: document.getElementById("rcus_id").value,
            name: document.getElementById("rname").value,
            email: document.getElementById("remail").value,
            phone_no: document.getElementById("rphone").value,
            address: document.getElementById("raddress").value,
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/cus_detailsupdate", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(dta);
        xhr.send(dta);
           // await sleep(4000)
        alert("Record Updated Successfully!!");
        App.getcustomer();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              App.getcustomer();
            }
          };
          $("#changedata").trigger("reset");
        // alert("yes");
        // fetch('http://44.209.219.84:3000/cus_detailsupdate', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getcustomer();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      },
    
      rem_cus: function (i) {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          customer: {
            id: i,
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/cus_detailsdelete", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(dta);
        alert("Record Deleted!!");
        App.getcustomer();
        // fetch('http://44.209.219.84:3000/cus_detailsdelete', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getcustomer();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      },

      postbugs: async function () {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          bugs: {
            problem: document.getElementById("problem").value,
            description: document.getElementById("des").value,
            date_time: document.getElementById("date").value,
            ss_name: document.getElementById("ss_name").value,
            status: "pending",
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/bugsinsert", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(dta);
        xhr.send(dta);
        alert("Bug Reported!!");
        // App.getcustomer();
        xhr.onreadystatechange= function () {
          if (xhr.readyState == 4) {
            // App.getcustomer();
          }
        };
        // fetch('http://44.209.219.84:3000/cus_detailsinsert', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getcustomer();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        $("#changedata").trigger("reset");
      },

      getbugs: function () {
        var b = "<tr><th>Bugs ID</th><th>Problem</th><th>Description</th><th>Date</th><th>Status</th></tr>";
        const api_url = "http://44.209.219.84:3000/bugs";
        // console.log(api_url);
        cus.innerHTML = b;
        data = this.getapi(api_url).then((data) => {
          // console.log("y");
          for (var i = 0; i <= data.length; i++) {
            var a =
              "<tr><td scope='row'>" +
              data[i].id +
              "</td><td  scope='row'>" +
              data[i].problem +
              "</td><td  scope='row'>" +
              data[i].description +
              "</td><td  scope='row'>" +
              data[i].date_time +
              "</td><td  scope='row'>" +
              data[i].status +
              "</td><td  scope='row'><span class='material-icons' onclick='App.getpatbug(" +
              data[i].id +
              ")'>edit</span></td></tr>";
            // console.log(data[i]);
            cus.innerHTML += a;
          }
          // console.log("a")
        });
      },

      getbugs1: function () {
        var b = "<tr><th>Bugs ID</th><th>Problem</th><th>Description</th><th>Date</th><th>Status</th></tr>";
        const api_url = "http://44.209.219.84:3000/bugs";
        // console.log(api_url);
        cus.innerHTML = b;
        data = this.getapi(api_url).then((data) => {
          // console.log("y");
          for (var i = 0; i <= data.length; i++) {
            var a =
              "<tr><td scope='row'>" +
              data[i].id +
              "</td><td  scope='row'>" +
              data[i].problem +
              "</td><td  scope='row'>" +
              data[i].description +
              "</td><td  scope='row'>" +
              data[i].date_time +
              "</td><td  scope='row'>" +
              data[i].status +
              "</td><td  scope='row'><span class='material-icons' onclick='App.getpatbug1(" +
              data[i].id +
              ")'>edit</span></td></tr>";
            // console.log(data[i]);
            cus.innerHTML += a;
          }
          // console.log("a")
        });
      },

      getpatbug: function (i) {
        var x = document.getElementById("changeRecordForm");
        const api_url = "http://44.209.219.84:3000/bugs/" + i;
        // console.log(api_url);
        data = this.getapi(api_url).then((data) => {
          (x.elements[0].value = data[0].id),
            (x.elements[1].value = data[0].problem),
            (x.elements[2].value = data[0].description),
            (x.elements[3].value = data[0].date_time),
            (x.elements[4].value = data[0].ss_name),
            (x.elements[5].value = data[0].cus_id),
            (x.elements[6].value = data[0].status),
            
            $("#changedata").modal();
        });
      },

      getpatbug1: function (i) {
        var x = document.getElementById("changeRecordForm");
        const api_url = "http://44.209.219.84:3000/bugs/" + i;
        // console.log(api_url);
        data = this.getapi(api_url).then((data) => {
          (x.elements[0].value = data[0].id),
            (x.elements[1].value = data[0].problem),
            (x.elements[2].value = data[0].description),
            (x.elements[3].value = data[0].date_time),
            (x.elements[4].value = data[0].ss_name),
            (x.elements[5].value = data[0].status),
            $("#changedata").modal();
        });
      },

      postupbug: async function () {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          bugs: {
            id: document.getElementById("rbug_id").value,
            problem: document.getElementById("rproblem").value,
            description: document.getElementById("rdes").value,
            date_time: document.getElementById("rdate").value,
            status: document.getElementById("rstatus").value,
            comment: document.getElementById("rcomment").value,
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/bugsupdate", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(dta);
        xhr.send(dta);
           // await sleep(4000)
        alert("Record Updated Successfully!!");
        App.getbugs();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              App.getbugs();
            }
          };
          $("#changedata").trigger("reset");
        // alert("yes");
        // fetch('http://44.209.219.84:3000/cus_detailsupdate', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getcustomer();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      },
    
      postupbug1: async function () {
        var xhr = new XMLHttpRequest();
        var dta = JSON.stringify({
          bugs: {
            id: document.getElementById("rbug_id").value,
            problem: document.getElementById("rproblem").value,
            description: document.getElementById("rdes").value,
            date: document.getElementById("rdate").value,
            status: document.getElementById("rstatus").value,
            comment: document.getElementById("rcomment").value,
          },
        });
        xhr.open("POST", "http://44.209.219.84:3000/bugsupdate", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        console.log(dta);
        xhr.send(dta);
           // await sleep(4000)
        alert("Record Updated Successfully!!");
        App.getbugs();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              App.getbugs1();
            }
          };
          $("#changedata").trigger("reset");
        // alert("yes");
        // fetch('http://44.209.219.84:3000/cus_detailsupdate', {
        //   method: 'POST', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(dta),
        // })
        //   .then((response) => response.json())
        //   .then((dta) => {
        //     console.log('Success:', dta);
        //     App.getcustomer();
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      },
      

      getapi: async function (url) {
        // Storing response
        const response = await fetch(url);
        // Storing data in form of JSON
        var data = await response.json();
        // console.log(data);
        return data;
      },
      
      sleep:function(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

    };