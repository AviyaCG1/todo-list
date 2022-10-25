
export class PubSub{
    constructor(){
        this.events = {};
        this.subscribersId = -1;
    }

    publish(event, data){
        if (!this.events[event]) return false;

        this.events[event].forEach(sub => {
            sub.func(data)
        });
        return true;
    }

    // This function return subId
    subscribe(event, func){
        if(!this.events[event]){
            this.events[event] = [];
        }

        this.subscribersId += 1;
        const subId = this.subscribersId.toString();

        this.events[event].push({
            subId, 
            func,
        });

        return subId; // subId can be used by the subscriber to unsubscribing the event
    }

    unsubscribe(event, subId){
        this.events[event].splice(subId, 1);
    }
}