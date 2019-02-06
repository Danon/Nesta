# Guide for developers

This `ReadMe` file is here for future developers of this project.

## Set up

To set up the project you need to:

 - Close the project from repository
 - Install dependencies
 - Fill database data in `.env`
 - Migrate models
 
Clone
```bash
git clone {git repository address}
```

Install dependencies
```bash
composer install
```
```
cd resources/vue
npm install
```

Populate `.env` for these keys:
```bash
DB_HOST=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

Migrate models
```bash
php artisan migrate
```

And, if you'd like, seed test data
```
php artisan db:seed
```

## Every-day work

### For local machine

```bash
php artisan serve    # Start PHP server

cd resources/vue
npm run dev          # Run developer mode, automatic builds, hot reloading, 
                     # source maps, all the good stuff
```

### For production

```bash
cd resources/vue
npm run build        # Build js/img/css and index.blade.php files

cd ../..
php artisna serve    # Start PHP server
```

It will put JS application to `/public/build` folder, and create `resources/views/index.blade.php` with js/css/img links to `/build/` folder.
