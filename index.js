const RestClient = require('ringcentral-typescript').default

;(async () => {
  const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
  await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
  const ext = await rc.restapi().account().extension().post({
    contact: {
      firstName: 'User',
      lastName: 'Test',
      email: 'user.test.666@gmail.com',
      emailAsLoginName: true
    },
    setupWizardState: 'NotStarted',
    extensionNumber: '1002',
    password: 'password',
    roles: [{
      id: '1'
    }],
    type: 'User'
  })
  console.log(ext)
  await rc.restapi().account().extension(ext.id).delete()
})()
