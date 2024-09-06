describe('User Login/Logout Test', () => {

  let TEST_EMAIL = 'grudilov24@gmail.com'
  let TEST_PASSWORD = 'test1234'

    it.only('should log in with valid credentials', () => {
      //LOG IN
      // Navigate to the OpenWeather login page.
      cy.visit('https://openweathermap.org')
      cy.get('.user-li > a').click()

      // Enter valid credentials
      cy.get('#user_email').type(TEST_EMAIL)       
      cy.get('#user_password').type(TEST_PASSWORD)   

      //Submit the login form            
      cy.get('.new_user > .btn').click();
      
      //redirecting to the homepage upon successful login
      cy.url('').should('include', '/home')
      
      // Assert that the user profile icon is visible
      cy.get('.panel-body').should('be.visible')

      //LOG OUT
      cy.get('.inner-user-container').wait(5000).click()
      cy.get(':nth-child(5) > .logout').click()
    });
  });
