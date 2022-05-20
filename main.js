let iphone = new Dienthoai(true, 50, [], [], []);
let samsung = new Dienthoai(true, 80, [], [], []);

iphone.luutinnhan("Hello motherf*ckers");
document.write(`Hop thu nhap cua iphone: ${iphone.draft} <br/><hr/>`);

iphone.guitinnhan(samsung);
document.write(`Hop thu gui cua samsung: ${samsung.sentbox} <br/>`);
document.write(`Hop thu gui cua iphone: ${iphone.sentbox} <br/>`);
document.write(`Hop thu nhan cua samsung: ${samsung.inbox} <br/>`);
document.write(`Hop thu nhan cua iphone: ${iphone.inbox}<br/`);
document.write(`Hop thu gui cua samsung: ${samsung.sentbox} <br/>`);
document.write(`Hop thu nhap cua samsung: ${samsung.draft} <br/>`);
document.write(`Hop thu nhap cua iphone: ${iphone.draft} <br/><hr/>`);

samsung.luutinnhan("Hello motherf*ckers");
document.write(`Hop thu nhap cua samsung: ${samsung.draft} <br/><hr/>`);

iphone.nhantinnhan(samsung);
document.write(`Hop thu gui cua samsung: ${samsung.sentbox} <br/>`);
document.write(`Hop thu gui cua iphone: ${iphone.sentbox} <br/>`);
document.write(`Hop thu nhan cua samsung: ${samsung.inbox} <br/>`);
document.write(`Hop thu nhan cua iphone: ${iphone.inbox}<br/`);
document.write(`Hop thu gui cua samsung: ${samsung.sentbox} <br/>`);
document.write(`Hop thu nhap cua samsung: ${samsung.draft} <br/>`);
document.write(`Hop thu nhap cua iphone: ${iphone.draft} <br/><hr/>`);
