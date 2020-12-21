Feature('Sign-in');

Scenario('Sign-in to finiata', ({ I }) => {
        I.wait(5);
        I.amOnPage('https://my-staging.finiata.pl/sign-in'); // Checking if i am on the right URL
        I.wait(3);
        I.say('Writing the credentails');
        I.fillField('//*[@id="email"]', 'alimohsin585@gmail.com'); //Filling the email field
        I.fillField('//*[@id="root"]/div[3]/form/div[2]/input', '123456789mo'); //Writing the password
        I.click('//*[@id="root"]/div[3]/form/button'); //Clicking on the sign-in button
       I.wait(3);
        I.seeCurrentUrlEquals('https://my-staging.finiata.pl/credit-line/onboarding/welcome'); //Checking if i am on the right page
        I.see('Witamy w Finiata!'); //Verify if i have successfully logged in and i can see the homepage.
        //I.closeCurrentTab();
});

Scenario('Trying to sign-in with wrong credentials', ({I}) =>{
    I.wait(5);

        I.amOnPage('https://my-staging.finiata.pl/sign-in'); // Checking if i am on the right URL
        I.wait(3);
        I.say('Writing the wrong credentaisl');
        I.fillField('//*[@id="email"]', 'test@exapmle.com'); //Filling the email field
        I.fillField('//*[@id="root"]/div[3]/form/div[2]/input', '123456789mo'); //Writing the password
        I.click('//*[@id="root"]/div[3]/form/button'); //Clicking on the sign-in button
        I.wait(3);
        I.dontSeeInCurrentUrl('https://my-staging.finiata.pl/credit-line/onboarding/welcome'); //Verifying that i am not redirected to the login page
        I.see('Podany e-mail i hasło są nieprawidłowe.'); //Confirming if i can see the error message

});