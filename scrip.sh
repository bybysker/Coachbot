docker build -t myapp .
docker run -p 5000:5000 --env-file .env myapp