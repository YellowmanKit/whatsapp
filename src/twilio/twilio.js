require('dotenv').config()
const client = require('twilio')(process.env.SID, process.env.TOKEN)
import { to } from '../func'

export const twilio = async ({ number, message }) => {
  var err, res
  [err, res] = await to(client.messages.create({
     body: message,
     from: 'whatsapp:' + process.env.NUMBER,
     to: 'whatsapp:' + number
  }))
  if(err){ console.log(err) }
  console.log('message sid ' + res.sid + ' sent to ' + number)
}
