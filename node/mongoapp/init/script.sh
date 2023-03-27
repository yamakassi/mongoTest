#!/bin/bash
##############################################################
# Usage ( * = optional ):                                    #
# ./script.sh <db-address> <db-port> *<username> *<password> #
##############################################################
# docker cp mongoapp/init/transactions.json <container_id>:/tmp/init.json 
#docker exec <container_id> mongoimport -d db -c notes -u root -p 123456 --authenticationDatabase admin  --file /tmp/init.json


#v2  
#docker exec -i mongodb sh -c 'mongoimport -d db -c notes -u root -p 123456 --authenticationDatabase admin' < mongoapp/init/transactions.json

#if [ ! -z "$3" ]; then
#    if [ ! -z "$4" ]; then
#        echo "Using password authentication!"
#        auth="--authenticationDatabase admin -u $3 -p $4"
#    fi
#fi
#echo "333"
#for coll in *; do
#    if [ -d "${coll}" ] ; then
#        echo "$coll"
#        for file in $coll/*; do
#            mongoimport --drop --host $1 --port $2 --db "$coll" --collection "$(basename $file .json)" --file $file $auth
#            echo "$(basename $file .json)"
#            echo "$file"
#        done
#    fi
#done