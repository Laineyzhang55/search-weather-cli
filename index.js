#!/usr/bin/env node

const getWeather = require('search-weather');
//process是node的内置工具，得到当前命令
if(process.argv[2] === 'help') {
  console.log(`
  Usage:
    weather <cityName>
  Example:
    weather 重庆
  `)
}else {
  let city = process.argv[2]
  getWeather(city)
  .then(data => {
    console.log('当前城市: '+ data.results[0].currentCity)
    console.log('PM2.5: '+ data.results[0].pm25 )
    console.log('天气概况:')
    console.log('* '+ data.results[0].weather_data[0].data)
    console.log('* '+ data.results[0].weather_data[0].temperature)
    console.log('* '+ data.results[0].weather_data[0].wind)
    console.log('* '+ data.results[0].weather_data[0].weather)
  }).catch(err => {
    console.log(err)
  })
}
