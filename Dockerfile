# Use an official Python runtime as a parent image
FROM python:3.9

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app
# COPY app /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Set the appropriate permissions on the CA certificate bundle
RUN chmod 644 /app/caadmin.netskope.com.cer

# Set environment variables
ENV FLASK_APP=app/app.py
# Set the path to the CA certificate bundle
ENV REQUESTS_CA_BUNDLE=caadmin.netskope.com.cer
#ENV FLASK_ENV=production

# Expose port 5000 for Flask
EXPOSE 5000

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0", "--port=5000"]
#CMD ["python", "app/app.py"]