var htmls = document.querySelector('#container-header-date-realtime')
var currentTime = new Date()
var day = currentTime.getDay()+1
var date = currentTime.getDate()
var month = currentTime.getMonth()+1
var year = currentTime.getFullYear()
var format = 'Thứ '+ day + ', ' + date + ' tháng ' + month + ', ' + year
htmls.innerHTML = format