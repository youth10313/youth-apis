export interface Letter {
    sender: string
    receiver: string
    owner: string
    content: string
    title: string
    date: Date
    read: boolean,
    box: "inbox" | "outbox"
}
