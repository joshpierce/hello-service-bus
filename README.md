# Azure Service Bus - Hello World

This is a sample project that was built using the following training path. https://docs.microsoft.com/en-us/learn/modules/implement-message-workflows-with-service-bus/

## Getting Setup

Start by installing the npm package dependencies:

```
npm install
```

To run the sample apps, you'll need to update the .env file with your connection string to your Azure Service Bus Namespace.

Currently to get that connection string you can login to the portal, open your Azure Service Bus Namespace and choose the option on the left **Shared Access Policies**. Then click on the policy and it should display your primary and secondary connection strings.

Once you have the connection string, create a .env file in the root of this project and add the following line to it.

```
AZURE_SERVICEBUS_CONNECTIONSTRING=PasteConnectionStringHere
```

## Running The Queue Sample

Open 2 terminal windows, and run the following commands, 1 in each window.

Terminal 1 - Start the receiving app

```bash
npm run receiver
```

Terminal 2 - Start the sending app

```bash
npm run sender
```

At this point you should se data showing up in your receiver window.

## Running the Topic Sample

Open 3 terminal windows, and run the following commands, 1 in each window.

Terminal 1 - Start the topic-receiving-1 app.

```bash
npm run topic-receiver-1
```

Terminal 2 - Start the topic-receiving-2 app.

```bash
npm run topic-receiver-2
```

Terminal 3 - Start the topic sending app

```bash
npm run topic-sender
```

At this point you should se data showing up in both receiver windows as each one is accessing a different subscription in Azure.
