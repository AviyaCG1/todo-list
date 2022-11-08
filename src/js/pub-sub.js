class PubSub {
  constructor() {
    this.events = {};
    this.subscribersId = -1;
  }

  publish(event, data = null) {
    if (!this.events[event]) return false;

    this.events[event].forEach((sub) => {
      sub.func(data);
    });
    return true;
  }

  // This function return subId
  subscribe(event, func) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    // subId can be used by the subscriber to unsubscribing the event
    this.subscribersId += 1;
    const subId = this.subscribersId.toString();

    this.events[event].push({
      subId,
      func,
    });
    return subId;
  }

  unsubscribe(event, subId) {
    this.events[event].splice(subId, 1);
  }
}

export default new PubSub();
