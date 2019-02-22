## AWS SQS (Simple Queue Service)

### Description

AWS SQS is a message queue uses to decouple & integrated multiple components.

*Benefit*: https://aws.amazon.com/message-queue/benefits/

## How it works

One send message to a queue then others polls and retrieve the message

## Keyworks

##### Working flow

- Producer sends messages
- Consumer receives messages
- Consume handle and delete received messages out of the SQS queue

##### Queue Type

Have 2 types: Standard and FIFO. FIFO is only available in some regions and not available in Pacific region.

Standard Queue does not guarantee the order of received messages and consumer receive **at least 1 message.**

##### Retrieve messages

Have 2 ways: Short polling and long polling, short polling is default way

- Short polling: faster but expensive and increasing response have no message
- Long polling: slower,  but saving and reduce responses have no message 

Best practice: *Using one thread per queue with long polling*

##### Visibility Timeout

The time starts when consumer receives message, consumer must handle message then delete message. In this time, no other consumers can receive the message. This  mechanism guarantees no more than one consumes can receive same message at same time.

The default visibility timeout is 30s.

##### Delay

- Delay for all messages in queue using **Delay Queue**
- Delay for specific message in queue using **Message Timers**

##### Large Message

For message is too large(to GB) using AWS S3 manages it.

##### Dead-Letter Queues 

It contains message that consumer proccessed fail.

Example: Configure message has maximum 5 times viewing, over 5 times viewing but message is not be deleted, it is sent to Dead-Letter Queue.