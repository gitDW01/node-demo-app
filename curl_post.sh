#curl_post_test
curl -X POST -H "Content-Type: application/json" -d '{ "Time":"2", "Status":"2", "SLatitude":"1", "NS":"1", "SLongtitude":"1", "EW":"1", "CourseTrue":"1", "Date":"1", "SatCount":"1", "AltitudeMSL":"1", "ViewSat":"1", "COG":"1", "COGstat":"1", "Speed":"1", "SpeedAlt":"1", "UNUSED":"1", "Knot":"1" }' http://192.168.2.101:3000/gps
