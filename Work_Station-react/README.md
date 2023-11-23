# How to run the website 

1. Please ensure you have installed [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [php](https://www.php.net), [composer](https://getcomposer.org/) for php, and a sql database, i.e. [mariadb](https://mariadb.org)
2. You can update the **.env** file inside Work_station-api **DB_** section as you wish
3. **Migrate the database**; in a terminal:
     1. Navigate to **Work_station-api/** and run ``php artisan migrate``. A pop up will ask if you want to create the Work_station database and you have to check ``yes``.
     2. Next, navigate to the root of the project ``cd ..`` and run ``mysql -u root -p Work_station < database.sql`` and enter the password (default: "password"). Congrats, the database is now populated!
4. **Launch the servers**; run 2 terminals:
   * In the first one, navigate to **Work_station-api/**, and run ``composer install`` then ``composer update``. Then run ``php artisan serve`` to launch the api server.
   * In the second one, navigate to **Work_station-react/**, and run the command ``npm install`` then ``npm update``. Then run ``npm run dev`` to launch the front server.
5. Now open your favorite browser ([Firefox](https://www.mozilla.org/en-US/firefox/new/)), and open in a new tab [localhost:3000](http://localhost:3000/)

**You can now use our website! Enjoy!**
