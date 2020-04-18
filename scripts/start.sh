rm core/migrations/0*
rm db.sqlite3
python3 manage.py makemigrations
python3 manage.py migrate
