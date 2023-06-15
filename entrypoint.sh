#!/bin/sh

# Start the frontend-side application
cd frontend && npm run dev &
PID1=$!

# Start the server-side application
cd backend && npm start &
PID2=$!

# Wait for both processes to finish
wait $PID1
wait $PID2
