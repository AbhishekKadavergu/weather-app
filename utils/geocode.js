const request = require('request')



const geocode = (location, callback)=>{
    url1 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1IjoiYWJoaXNoZWtrYWRhdmVyZ3UiLCJhIjoiY2tkMW1iYnI5MTR1bjMwcGdweXhwNWx0ZCJ9.TU9QfMVbLmrVP0cAhWFtbA"
    request({url: url1, json: true}, (error, res)=>{
    
        if(error){
            console.log('Unable to fetch Geocode')
            callback(error, undefined)
        }
        else if(res.body.features.length ===0){
            console.log('Invalid location')
            callback(undefined, 'Invalid location')
    
        }
        else{    
            console.log(res.body.features[0].place_name)
            callback(undefined, {
                place_name: res.body.features[0].place_name,
                longitude: res.body.features[0].center[0],
                latitude: res.body.features[0].center[1]
            })
        }
    })
}

module.exports = geocode




