import { ServiceBusClient } from '@azure/service-bus';
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
    console.log('Creating Service Bus Client');
    const serviceBusClient = ServiceBusClient.createFromConnectionString(
        process.env.AZURE_SERVICEBUS_CONNECTIONSTRING || ''
    );
    console.log('Creating Queue Client');
    const queueClient = serviceBusClient.createQueueClient('salesmessages');
    console.log('Creating Sender');
    const sender = queueClient.createSender();

    console.log('Sending single message to queue');
    await sender.send({
        body: JSON.stringify({
            firstName: 'John',
            lastName: 'Doe',
            function: 'Tester',
        }),
        contentType: 'application/json',
    });
    // console.log('Sending batch messages to queue');
    // await sender.sendBatch([
    //     { body: 'my-message-body-1' },
    //     { body: 'my-message-body-2' },
    //     { body: 'my-message-body-3' },
    // ]);
})();
