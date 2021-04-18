const axios = require('axios')

const testRequest = async () => {
  try {
    const response = await axios.post('http://localhost:3003/login', {
      username: 'ayrtonlacerda',
      password: '123456'
    })
    console.log('\n\n', { response }, '\n\n')
  } catch (error) {
    console.log('\n\n', { error }, '\n\n')
  }
}

testRequest()