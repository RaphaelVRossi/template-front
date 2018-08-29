#!/bin/sh
DEFAULT_HOST=$NG_HOST
DEFAULT_PORT=$NG_PORT

if [ $NG_HOST -z ] 
then
	DEFAULT_HOST="0.0.0.0"
fi

if [ $NG_PORT -z ]
then 
	DEFAULT_PORT="8080"
fi

echo "********************************************************"
echo "Waiting for the zuul server to start on port $ZUUL_PORT"
echo "********************************************************"
while ! `nc -z $ZUUL_HOST $ZUUL_PORT`; do sleep 3; done
echo ">>>>>>>>>>>> Zull Server has started"

ng serve --host $DEFAULT_HOST --port $DEFAULT_PORT
