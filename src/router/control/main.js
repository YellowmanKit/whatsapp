import { version } from '../../../package.json'
import { twilio } from '../../twilio/twilio'

export const router = (app, db) =>{

  app.get('/', (req, res) => {
    return res.json({ version })
  })

  app.get('/twilio/:number/:message', (req, res) => {
    twilio(req.params)
    return res.json({ status: 'ok' })
  })

  app.post('/twilio/received/', (req, res) => {
    console.log('message received')
    console.log(req.body)
    return res.json({ status: 'message received' })
  })

  app.post('/twilio/status/', (req, res) => {
    console.log('status update')
    console.log(req.body)
    return res.json({ status: 'status received' })
  })

}
