/*$(function(){
  $.getJSON('https://raw.githubusercontent.com/KaungKhantThu/UniHack/master/FinalTDI.json', function(data){
    $.each(data.Sheet1,function(i,emp){
      
    });
  });
});*/


/*document.getElementById("#btn-mm").onclick = function() {
  document.getElementById("#chart").hide();
}*/
function myanmar(){
  document.getElementById("chart").style.display = "none";
}
//start

d3.json('https://raw.githubusercontent.com/KaungKhantThu/UniHack/master/TotalTDI.json', function(data) {
  var modData = [];
  var item;
  data.Sheet1.forEach(function(d, i) {
    modData[i] = d.ACTS_15_64_UNEMP_T;
    
  });

  console.log(modData);

  var way = [];
  
  for(var i = 0; i <= modData.length; i++){
    way[i]=parseInt(modData[i]);
  }

  console.log(way);
  var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
      ["Unemployed People(age 15-64)", way[0], way[1], way[2], way[3], way[4], way[5], way[6], way[7],way[8],way[9],way[10],way[11],way[12],way[13],way[14] ],
      ["Total Population", 1689441, 286627, 1574079, 478801, 5325347, 1408401, 3917055, 6165723, 2054393, 3188807, 7360703, 6184829, 1160242 , 4867373, 5824432]
      ],
      type: 'bar',
    }
  });
});
//end
d3.json('https://raw.githubusercontent.com/KaungKhantThu/UniHack/master/TotalTDI.json', function(data) {
  var modData = [];
  var item;
  data.Sheet1.forEach(function(d, i) {
    modData[i] = d.ACTS_15_64_EMP_T;
    
  });

  console.log(modData);

  var way = [];
  
  for(var i = 0; i <= modData.length; i++){
    way[i]=parseInt(modData[i]);
  }

  console.log(way);
  var chart = c3.generate({
    bindto: '#chart_3',
    data: {
      columns: [
      ["Employed People(age 15-64)", way[0], way[1], way[2], way[3], way[4], way[5], way[6], way[7],way[8],way[9],way[10],way[11],way[12],way[13],way[14] ],
      ["Total Population", 1689441, 286627, 1574079, 478801, 5325347, 1408401, 3917055, 6165723, 2054393, 3188807, 7360703, 6184829, 1160242 , 4867373, 5824432],
      ],
      type: 'bar',
    }
  });
});

d3.json('https://raw.githubusercontent.com/KaungKhantThu/UniHack/master/TotalTDI.json', function(data) {
  var modData = [];
  var item;
  data.Sheet1.forEach(function(d, i) {
    modData[i] = d.HIGHG_25_AUD_T;
    
  });

  console.log(modData);

  var way = [];
  
  for(var i = 0; i <= modData.length; i++){
    way[i]=parseInt(modData[i]);
  }

  console.log(way);
  var chart = c3.generate({
    bindto: '#chart_4',
    data: {
      columns: [
      ["Undergrad Students", way[0], way[1], way[2], way[3], way[4], way[5], way[6], way[7],way[8],way[9],way[10],way[11],way[12],way[13],way[14] ],
      ],
      type: 'bar',
    }
  });
});

d3.json('https://raw.githubusercontent.com/KaungKhantThu/UniHack/master/TotalTDI.json', function(data) {
  var modData = [];
  var item;
  data.Sheet1.forEach(function(d, i) {
    modData[i] = d.HIGHG_25_APD_T;
    
  });

  console.log(modData);

  var way = [];
  
  for(var i = 0; i <= modData.length; i++){
    way[i]=parseInt(modData[i]);
  }

  console.log(way);
  var chart = c3.generate({
    bindto: '#chart_5',
    data: {
      columns: [
      ["Postgrad Students", way[0], way[1], way[2], way[3], way[4], way[5], way[6], way[7],way[8],way[9],way[10],way[11],way[12],way[13],way[14] ],
      ],
      type: 'bar',
    }
  });
});

d3.json('https://raw.githubusercontent.com/KaungKhantThu/UniHack/master/TotalTDI.json', function(data) {
  var modData = [];
  var item;
  data.Sheet1.forEach(function(d, i) {
    modData[i] = d.FACTTOT;
    
  });

  

  console.log(modData);

  var way = [];
  
  for(var i = 0; i <= modData.length; i++){
    way[i]=parseInt(modData[i]);
  }

  console.log(way);
  var chart = c3.generate({
    bindto: '#chart_6',
    data: {
      columns: [
      ["Number of Factories", way[0], way[1], way[2], way[3], way[4], way[5], way[6], way[7],way[8],way[9],way[10],way[11],way[12],way[13],way[14] ],
      ],
      type: 'bar',
    }
  });
});

d3.json('https://raw.githubusercontent.com/KaungKhantThu/UniHack/master/TotalTDI.json', function(data) {
  var modData = [];
  var item;
  data.Sheet1.forEach(function(d, i) {
    modData[i] = d.CONB;
    
  });

  console.log(modData);

  var way = [];
  
  for(var i = 0; i <= modData.length; i++){
    way[i]=parseInt(modData[i]);
  }

  console.log(way);
  var chart = c3.generate({
    bindto: '#chart_7',
    data: {
      columns: [
      ["Number of Companies", way[0], way[1], way[2], way[3], way[4], way[5], way[6], way[7],way[8],way[9],way[10],way[11],way[12],way[13],way[14] ],
      ],
      type: 'bar',
    }
  });
});
/*var chart = c3.generate({
  bindto: '#chart',
  data: {
    columns: [
    ['data1', 30, 200, 100, 400, 150, 250],
    ['data2', 130, 100, 140, 200, 150, 50]
    ],
    type: 'bar',
    onclick: function (d, i) { console.log("onclick", d, i); },
  },
  bar: {
    width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
          }

        // or
        //width: 100 // this makes bar width 100px
      }
    });*/


    var chart = c3.generate({
      bindto: '#chart_2',
      data: {
        // iris data from R
        columns: [
        ['data1', 30],
        ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
    });

