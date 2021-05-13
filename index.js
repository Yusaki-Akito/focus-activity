var myHeaders = new Headers();
myHeaders.append("sec-ch-ua", "\" Not A;Brand\";v=\"99\",\"Chromium\";v=\"90\", \"Microsoft Edge\";v=\"90\"");
myHeaders.append("X-Super-Properties", "eyJvcyI6IldpbmR3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNIjoiIiwiYnJvd3Nlcl191c2VyX2FnZWS0IjoiTW96aWxsYS81LjAKFdpbmRvd3MgT10gMTAMDg2luljQ7IH2NCkgQXBwbGVXZOLEXQUITBLjM2ICHLSFRNTCwgblrZSBHZWNobykgQ2hyb211LzkwLjAUNDQzNC45MyBTYWZhcmNTHBL3M2IEVkZy8SMC4wjEXC41NilsIn0yb3dzZXJfdmVyc2lvbiI6IjkwjAUNDQZMC4SMyIsIm9zX3ZlcnNpb2410iIXMCISIND1ZmVycnVyIjoiaRecHM6Ly93d3cucGF5cGFsLVb593ZWOCHBzL2hlcmilcz9nbG93PTETUCZ1bfJldHVybjecnVlInkvaZVUPUVDLThisjc2NjeBOFzDcyMjNJn5vbGVnYWNSPTEMYmFfdG9rZW49QKETOUVINTM5MDQƏRjA5MzAyMDCMY291bnRye554PVRIJMOVY2FsZS54PXROXIRIIiicpZXJyaW5nX2RvbWFpbi16Ind3dy5WYXIWYHUY29trivicnVnZXJyZXIFY3VycmVudCI6IiISInJIZWVycnluz19kb21haW5fY3VycnVudCI6IVISIN1bGVhc2VhY2hhbm51bCI6InNDYWISZSIsInfsakVudF9idwesZF9udinizxIiONDUXLCJjbG1IbnRfZXZlbnRfc291cmlIjpudlxsFQ--");
myHeaders.append("X-Context-Properties", "eyJsb2NhdGlvbiI6IkNvbnRleHogTWVudSJ9");
myHeaders.append("sec-ch-ua-nobile", "?0");
myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Appleljebkit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36 Edg/90.0.818.56");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "");
myHeaders.append("Accept", "*/*");
myHeaders.append("Sec-Fetch-Site", "same-origin");
myHeaders.append("Sec-fetch-Mode", "cors");
myHeaders.append("Sec-Fetch-Dest", "empty");
myHeaders.append("Cookie", "__dcfduid-4c096049396247949faf59f9ebecb463");
var raw = JSON.stringify({
"max_age": 3600,
"max_uses" : 0,
"target_application_id": "755680276941176913",
"target_type": 2,
"temporary": false
});
var requestOptions = {
method: 'POST',
headers: myHeaders,
bady: raw,
redirect: 'follow'
};
  
fetch("https://discord.com/api/v8/channels/youvoicechannelid/invites",
requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
