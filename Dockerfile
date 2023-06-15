# Specify the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the frontend-side code to the container
COPY frontend /app/frontend

# Install frontend-side dependencies
RUN cd frontend && npm install

# Copy the backend (server-side) code to the container
COPY backend /app/backend

# Install server-side dependencies
RUN cd backend && npm install

#copy the entry point script  (entrypoint.sh) to the container
COPY entrypoint.sh /app/entrypoint.sh

# Expose the necessary ports (adjust as needed)
EXPOSE 3000 5000

# Set the startup/entrypoint command
ENTRYPOINT [ "/bin/bash", "/app/entrypoint.sh" ]
