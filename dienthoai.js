class Dienthoai {
  constructor(trangthai, pin, draft, inbox, sentbox) {
    this.pin = pin;
    this.trangthai = trangthai;
    this.draft = draft;
    this.inbox = inbox;
    this.sentbox = sentbox;
  }

  kiemtratrangthai() {
    return this.trangthai;
  }

  sacpin() {
    pin = pin + 10;
  }

  luutinnhan(message) {
    this.draft.push(message);
  }

  guitinnhan(phone2) {
    let message = this.draft.pop();
    phone2.inbox.push(message);
    this.sentbox.push(message);
  }

  nhantinnhan(phone2) {
    let message = phone2.draft.pop();
    this.inbox.push(message);
    phone2.sentbox.push(message);
  }
}
