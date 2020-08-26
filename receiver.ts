import {
    ServiceBusClient,
    ReceiveMode,
    ServiceBusMessage,
} from '@azure/service-bus';
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
    console.log('Creating Service Bus Client');
    const serviceBusClient = ServiceBusClient.createFromConnectionString(
        process.env.AZURE_SERVICEBUS_CONNECTIONSTRING || ''
    );
    console.log('Creating Queue Client');
    const queueClient = serviceBusClient.createQueueClient('salesmessages');
    console.log('Creating Receiver');
    const receiver = queueClient.createReceiver(ReceiveMode.peekLock);

    const handleMessage = async (message: ServiceBusMessage) => {
        console.log('Received Message:');
        console.log(JSON.stringify(JSON.parse(message.body), null, 4));
    };
    const errorMessage = async (error: any) => {
        console.log(error);
    };

    receiver.registerMessageHandler(handleMessage, errorMessage);
})();
