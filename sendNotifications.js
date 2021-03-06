const expooo = require('expo-server-sdk').Expo;

// Create a new Expo SDK client
const expo = new expooo();

// Create the messages that you want to send to clents
const messages = [];

// eslint-disable-next-line no-restricted-syntax
for (const pushToken of ['ExponentPushToken[4-Xk9qKWOkPtJtXFuyFCB5]']) {
  // Each push token looks like ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]

  // Check that all your push tokens appear to be valid Expo push tokens
  if (!expooo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid expooo push token`);
    continue;
  }

  // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications)
  messages.push({
    to: pushToken,
    sound: 'default',
    body: 'This is a test notification',
    data: { products: [{ productUrl: 'https://groceries.asda.com/product/kids-yogurts/frubes-strawberry-flavour-yogurt/1000078555632', hostNameUrl: 'https://groceries.asda.com', imageUrl: 'https://ui.assets-asda.com/dm/asdagroceries/3329770062481_T1?defaultImage=asdagroceries/noImage&resMode=sharp2&id=K2mTf0&fmt=jpg&fit=constrain,1&wid=288&hei=288', productName: 'Frubes Strawberry Flavour Yogurt', productId: 12, productDiscountedPrice: '95p', productPrice: '£2.00' }, { productUrl: 'https://www.debenhams.com/webapp/wcs/stores/servlet/prod_10701_10001_280010307045_-1', hostNameUrl: 'https://www.debenhams.com', imageUrl: 'https://debenhams.scene7.com/is/image/Debenhams//280010307045?wid=675&hei=675&fmt=webp&qlt=90', productName: "Dark Blue '501' 'Sponge Street' Straight Jeans", productId: 35, productDiscountedPrice: 'Now £64.00', productPrice: 'Was £80.00' }, { productUrl: 'https://groceries.morrisons.com/webshop/product/Dr-Beckmann-Colour--Dirt-Collector-/358858011?gclid=CjwKCAiAg9rxBRADEiwAxKDTujtl4OHWRxXqhL81ZsCejLF3hXR_M5UyjQzpgVEB79TifJl4p7cvzBoC_NgQAvD_BwE&gclsrc=aw.ds', hostNameUrl: 'https://groceries.morrisons.com', imageUrl: 'https://groceries.morrisons.com/productImages/358/358858011_0_170x170.jpg?identifier=80aba395e7e49de3adbe10187f384ec3', productName: null, productId: 158, productDiscountedPrice: '\n                    £3\n                ', productPrice: '\n                    £4.50\n                ' }] },
  });
}

// The Expo push notification service accepts batches of notifications so
// that you don't need to send 1000 requests to send 1000 notifications. We
// recommend you batch your notifications to reduce the number of requests
// and to compress them (notifications with similar content will get
// compressed).
const chunks = expo.chunkPushNotifications(messages);
const tickets = [];
(async () => {
  // Send the chunks to the Expo push notification service. There are
  // different strategies you could use. A simple one is to send one chunk at a
  // time, which nicely spreads the load out over time:
  // eslint-disable-next-line no-restricted-syntax
  for (const chunk of chunks) {
    try {
      const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      console.log(ticketChunk);
      tickets.push(...ticketChunk);
      // NOTE: If a ticket contains an error code in ticket.details.error, you
      // must handle it appropriately. The error codes are listed in the Expo
      // documentation:
      // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
    } catch (error) {
      console.error(error);
    }
  }
})();


// Later, after the Expo push notification service has delivered the
// notifications to Apple or Google (usually quickly, but allow the the service
// up to 30 minutes when under load), a "receipt" for each notification is
// created. The receipts will be available for at least a day; stale receipts
// are deleted.
//
// The ID of each receipt is sent back in the response "ticket" for each
// notification. In summary, sending a notification produces a ticket, which
// contains a receipt ID you later use to get the receipt.
//
// The receipts may contain error codes to which you must respond. In
// particular, Apple or Google may block apps that continue to send
// notifications to devices that have blocked notifications or have uninstalled
// your app. Expo does not control this policy and sends back the feedback from
// Apple and Google so you can handle it appropriately.
const receiptIds = [];
for (const ticket of tickets) {
  // NOTE: Not all tickets have IDs; for example, tickets for notifications
  // that could not be enqueued will have error information and no receipt ID.
  if (ticket.id) {
    receiptIds.push(ticket.id);
  }
}

const receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
(async () => {
  // Like sending notifications, there are different strategies you could use
  // to retrieve batches of receipts from the Expo service.
  for (const chunk of receiptIdChunks) {
    try {
      const receipts = await expo.getPushNotificationReceiptsAsync(chunk);
      console.log(receipts);

      // The receipts specify whether Apple or Google successfully received the
      // notification and information about an error, if one occurred.
      for (const receipt of receipts) {
        if (receipt.status === 'ok') {
          continue;
        } else if (receipt.status === 'error') {
          console.error(`There was an error sending a notification: ${receipt.message}`);
          if (receipt.details && receipt.details.error) {
            // The error codes are listed in the Expo documentation:
            // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
            // You must handle the errors appropriately.
            console.error(`The error code is ${receipt.details.error}`);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
})();
