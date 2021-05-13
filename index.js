fetch("https://discord.com/api/v8/channels/<channel_id>/invites",{
    headers: {
        "content-type": "application/json",
        authorization: "Your_token"
    },
    body: JSON.stringify({
        "max_age": 3600,
        "max_uses" : 0,
        "target_application_id": "755600276941176913", //Youtube Together | 755827207812677713 Poker Night | 773336526917861400 Betrayal.io | 814288819477020702 Fishington.io
        "target_type": 2,
        "temporary": false
    }),
    method: "POST"
}).then(res=>res.json()).then(console.log)
