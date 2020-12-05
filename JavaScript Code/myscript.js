var x = document.getElementById('container');
        //console.log(x);

        x.style.width = "200px";
        x.style.height = "500px";
        x.style.backgroundColor = "red";
        x.innerHTML = "Hello I am External JavaScript";
        x.style.marginBottom = "20px";


        var y = document.getElementById("btn");

            y.onclick = function()
            {
                //alert("Hello This is an event");
                x.style.backgroundColor = "blue";
            };