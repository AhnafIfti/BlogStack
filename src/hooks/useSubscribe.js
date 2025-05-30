import { addSubscription, removeSubscription } from "../utils/axios-utils";

export const useSubscribe = () => {
  const subscribe = async (id, subId) => {
    try {
      const postBody = {
        id: subId,
      };
      const result = await addSubscription(id, postBody);
      if (result.success) {
        console.error("Subscribed successful");
      }
    } catch (err) {
      console.error("Subscription error:", err);
    }
  };

  return subscribe;
};

export const useUnsubscribe = () => {
  const unsubscribe = async (id, subId) => {
    try {
      const postBody = {
        id: subId,
      };
      const result = await removeSubscription(id, postBody);
      if (result.success) {
        console.error("Unsubscribed successful");
      }
    } catch (err) {
      console.error("Unsubscription error:", err);
    }
  };

  return unsubscribe;
};
