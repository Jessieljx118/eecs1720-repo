# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client 

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure 
account_sid = 'AC70df43da6bd43273091679086425206e' 
auth_token = '[AuthToken]' 
client = Client(account_sid, auth_token) 
 
message = client.messages.create( 
                              from_='whatsapp:+14155238886',  
                              body='Hello this is the robot for eecs1720 lab project2 ',      
                              to='whatsapp:+15489900603' 
                          ) 
 
print(message.sid)
