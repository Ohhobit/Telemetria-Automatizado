import { DashBoard } from "../pageobjects/dashboard.page";

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'cirrus',
  host: '10.0.0.34',
  database: 'telemetria',
  password: '1234!@#$Aa',
  port: 5432,
})


export module Setup {
  export function pg(funcionario:string,matriz: boolean) {
    let base_id = 0

    if (matriz) {
      base_id = 2
    }
    else {
      base_id = 45
    }
    return browser.call(function () {
      let queryResult = pool.connect()
        .then(client => {
          return client.query(`update account_account set base ='${base_id}' where user_id in (select id from auth_user where username = '${funcionario}' ) `)
            .then(res => {
              client.release()
            })
            .catch(e => {
              client.release()
              console.log(e.stack)
            })
        })
      browser.refresh()
      return queryResult
    })
  }

}

